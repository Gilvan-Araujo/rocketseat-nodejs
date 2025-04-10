import { test, beforeAll, describe, expect, beforeEach } from 'vitest'
import { execSync } from 'node:child_process'
import request from 'supertest'
import { app } from '../src/app'

beforeAll(async () => {
  await app.ready()
})

let userCookie = ''
const createUser = async () => {
  const createUserResponse = await request(app.server)
    .post('/users')
    .send({ name: 'John Doe' })

  const cookies = createUserResponse.get('Set-Cookie')
  const parsedCookie = (cookies && cookies[0]) || ''

  userCookie = parsedCookie
}

beforeEach(async () => {
  execSync('npm run knex migrate:rollback')
  execSync('npm run knex migrate:latest')
  await createUser()
})

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

describe('Meal routes', () => {
  test('the user can update a meal', async () => {
    const creationResponse = await createNewMealInDiet(userCookie)

    await request(app.server)
      .put(`/meals/${creationResponse.body.mealId}`)
      .set('Cookie', userCookie)
      .send({
        name: 'Fast food',
        description: 'McDonalds hamburger',
        date: '2024-01-01',
        isDiet: false,
      })

    const listMealsResponse = await request(app.server)
      .get('/meals')
      .set('Cookie', userCookie)
      .expect(200)

    expect(listMealsResponse.body.meals[0].name).toEqual('Fast food')
  })

  test('the user can delete a meal', async () => {
    const creationResponse = await createNewMealInDiet(userCookie)

    await request(app.server)
      .delete(`/meals/${creationResponse.body.mealId}`)
      .set('Cookie', userCookie)
      .expect(200)

    const listMealsResponse = await request(app.server)
      .get('/meals')
      .set('Cookie', userCookie)
      .expect(200)

    expect(listMealsResponse.body.meals).toEqual([])
  })

  test('the user can list all meals', async () => {
    const inDietCreationResponse = await createNewMealInDiet(userCookie)
    const outOfDietCreationResponse = await createNewMealOutOfDiet(userCookie)

    const listMealsResponse = await request(app.server)
      .get('/meals')
      .set('Cookie', userCookie)
      .expect(200)

    expect(listMealsResponse.body.count).toEqual(2)
    expect(listMealsResponse.body.meals[0].id).toEqual(
      inDietCreationResponse.body.mealId,
    )
    expect(listMealsResponse.body.meals[1].id).toEqual(
      outOfDietCreationResponse.body.mealId,
    )
  })

  test('the user can list a single meal', async () => {
    const creationResponse = await createNewMealOutOfDiet(userCookie)

    const listSingleMealResponse = await request(app.server)
      .get(`/meals/${creationResponse.body.mealId}`)
      .set('Cookie', userCookie)
      .expect(200)

    expect(listSingleMealResponse.body.meal[0].id).toEqual(
      creationResponse.body.mealId,
    )
  })
})
