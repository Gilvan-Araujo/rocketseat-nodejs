import { test, beforeAll, describe, expect, beforeEach } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

beforeEach(async () => {
  execSync('npm run knex migrate:rollback')
  execSync('npm run knex migrate:latest')
})

const createUser = async (): Promise<string> => {
  const createUserResponse = await request(app.server)
    .post('/users')
    .send({ name: 'John Doe' })

  const cookies = createUserResponse.get('Set-Cookie')
  const parsedCookie = (cookies && cookies[0]) || ''

  return parsedCookie
}

const createNewMealInDiet = (cookie: string) =>
  request(app.server)
    .post('/meals')
    .set('Cookie', cookie)
    .send({
      name: 'Breakfast',
      description: 'Eggs and bacon',
      date: '2024-01-01',
      isDiet: true,
    })
    .expect(201)

const createNewMealOutOfDiet = (cookie: string) =>
  request(app.server)
    .post('/meals')
    .set('Cookie', cookie)
    .send({
      name: 'Fast Food',
      description: 'McDonalds hamburger',
      date: '2024-01-01',
      isDiet: false,
    })
    .expect(201)

describe('User routes', () => {
  test('the unsigned user can create a new user', async () => {
    await request(app.server)
      .post('/users')
      .send({ name: 'John Doe' })
      .expect(201)
  })

  test('the signed user can create a new meal', async () => {
    const userCookie = await createUser()

    await createNewMealInDiet(userCookie)

    const listMealsResponse = await request(app.server)
      .get('/meals')
      .set('Cookie', userCookie)
      .expect(200)
    const body = JSON.parse(listMealsResponse.text)

    expect(body.count).toEqual(1)
    expect(body.meals[0].id).toEqual(expect.any(String))
  })

  test('the signed user can see the metrics and they update accordingly', async () => {
    const userCookie = await createUser()

    await createNewMealInDiet(userCookie)
    await createNewMealOutOfDiet(userCookie)

    let metricsResponse = await request(app.server)
      .get('/users/metrics')
      .set('Cookie', userCookie)
      .expect(200)

    let body = JSON.parse(metricsResponse.text)
    expect(body.totalMeals).toEqual(2)
    expect(body.totalMealsInDiet).toEqual(1)
    expect(body.totalMealsOutOfDiet).toEqual(1)
    expect(body.bestStreak).toEqual(1)

    await createNewMealOutOfDiet(userCookie)
    await createNewMealOutOfDiet(userCookie)

    metricsResponse = await request(app.server)
      .get('/users/metrics')
      .set('Cookie', userCookie)
      .expect(200)

    body = JSON.parse(metricsResponse.text)
    expect(body.totalMeals).toEqual(4)
    expect(body.totalMealsInDiet).toEqual(1)
    expect(body.totalMealsOutOfDiet).toEqual(3)
    expect(body.bestStreak).toEqual(1)

    await createNewMealInDiet(userCookie)
    await createNewMealInDiet(userCookie)

    metricsResponse = await request(app.server)
      .get('/users/metrics')
      .set('Cookie', userCookie)
      .expect(200)

    body = JSON.parse(metricsResponse.text)
    expect(body.totalMeals).toEqual(6)
    expect(body.totalMealsInDiet).toEqual(3)
    expect(body.totalMealsOutOfDiet).toEqual(3)
    expect(body.bestStreak).toEqual(2)
  })

  test('the unsigned user cannot access the system', async () => {
    await request(app.server).get('/users/metrics').expect(401)
  })
})
