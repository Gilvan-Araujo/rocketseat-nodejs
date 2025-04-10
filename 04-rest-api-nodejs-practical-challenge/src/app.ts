import fastify from 'fastify'
import { userRoutes } from './routes/user'
import { mealRoutes } from './routes/meal'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()

app.register(fastifyCookie)
app.register(userRoutes, { prefix: '/users' })
app.register(mealRoutes, { prefix: '/meals' })
