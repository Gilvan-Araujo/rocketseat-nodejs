import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { checkUserIdExists } from '../middlewares/check-user-id-exists'

export async function mealRoutes(app: FastifyInstance) {
  app.post('/', { preHandler: [checkUserIdExists] }, async (request, reply) => {
    const createMealBodySchema = z.object({
      name: z.string(),
      description: z.string(),
      date: z.string(),
      isDiet: z.boolean(),
    })

    const { name, date, description, isDiet } = createMealBodySchema.parse(
      request.body,
    )
    const mealId = randomUUID()
    const userId = request.cookies.userId

    await knex('meals').insert({
      name,
      id: mealId,
      date: new Date(date).toISOString(),
      description,
      isDiet,
      user_id: userId,
    })

    return reply.status(201).header('Content-Type', 'application/json').send(
      JSON.stringify({
        mealId,
      }),
    )
  })

  app.put(
    '/:mealId',
    { preHandler: [checkUserIdExists] },
    async (request, reply) => {
      const updateMealBodySchema = z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        date: z.string().optional(),
        isDiet: z.boolean().optional(),
      })

      const { name, date, description, isDiet } = updateMealBodySchema.parse(
        request.body,
      )
      const { mealId } = request.params as { mealId: string }
      const userId = request.cookies.userId

      await knex('meals')
        .update({
          ...(name && { name }),
          ...(description && { description }),
          ...(date && { date: new Date(date).toISOString() }),
          ...(isDiet && { isDiet }),
        })
        .where({
          id: mealId,
          user_id: userId,
        })

      return reply.status(200).send()
    },
  )

  app.delete(
    '/:mealId',
    { preHandler: [checkUserIdExists] },
    async (request, reply) => {
      const { mealId } = request.params as { mealId: string }
      const userId = request.cookies.userId

      await knex('meals').delete().where({
        id: mealId,
        user_id: userId,
      })

      return reply.status(200).send()
    },
  )

  app.get('/', { preHandler: [checkUserIdExists] }, async (request, reply) => {
    const userId = request.cookies.userId

    const meals = await knex('meals').select('*').where({
      user_id: userId,
    })

    return reply
      .header('Content-Type', 'application/json')
      .status(200)
      .send(
        JSON.stringify({
          count: meals.length,
          meals,
        }),
      )
  })

  app.get(
    '/:mealId',
    { preHandler: [checkUserIdExists] },
    async (request, reply) => {
      const { mealId } = request.params as { mealId: string }
      const userId = request.cookies.userId

      const meal = await knex('meals').select('*').where({
        user_id: userId,
        id: mealId,
      })

      return reply.status(200).header('Content-Type', 'application/json').send(
        JSON.stringify({
          meal,
        }),
      )
    },
  )
}
