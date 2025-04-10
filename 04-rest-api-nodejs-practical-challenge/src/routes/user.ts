import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { checkUserIdExists } from '../middlewares/check-user-id-exists'
import { getBestStreakOfMealsInDiet } from '../utils/get-best-streak-of-meals-in-diet'

export async function userRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createUserBodySchema = z.object({
      name: z.string(),
    })

    const { name } = createUserBodySchema.parse(request.body)
    const userId = randomUUID()

    await knex('users').insert({
      id: userId,
      name,
    })

    reply.cookie('userId', userId, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return reply.status(201).send()
  })

  app.get(
    '/metrics',
    { preHandler: [checkUserIdExists] },
    async (request, reply) => {
      const userId = request.cookies.userId

      const meals = await knex.select('*').from('meals').where({
        user_id: userId,
      })

      const totalMeals = meals.length
      const totalMealsInDiet = meals.filter((meal) => meal.isDiet).length
      const totalMealsOutOfDiet = meals.filter((meal) => !meal.isDiet).length
      const bestStreak = getBestStreakOfMealsInDiet(meals)

      return reply.status(200).send(
        JSON.stringify({
          totalMeals,
          totalMealsInDiet,
          totalMealsOutOfDiet,
          bestStreak,
        }),
      )
    },
  )
}
