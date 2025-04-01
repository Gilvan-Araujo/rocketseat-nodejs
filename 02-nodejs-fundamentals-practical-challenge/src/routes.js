import { Database } from "./database.js";
import { randomUUID } from "node:crypto";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { search } = req.query

      const tasks = database.select('tasks', search ? {
        name: search,
        email: search
      } : null)

      return res
        .end(JSON.stringify(tasks))
    }
  },
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { title, description } = req.body
      if (!title || !description)
        return res.writeHead(400).end(
          JSON.stringify({ message: "No title or description!" })
        )

      const id = randomUUID()
      const task = {
        id,
        title,
        description,
        completed_at: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }

      database.insert('tasks', task)
      return res.writeHead(201).end(JSON.stringify({ id }))
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params
      const { title, description } = req.body

      const updatedTask = database.update('tasks', id, { title, description })

      if (updatedTask != undefined) return res.writeHead(404).end(JSON.stringify({ message: updatedTask }))

      return res.writeHead(204).end()
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const deletedTask = database.delete('tasks', req.params.id)

      if (deletedTask != undefined) return res.writeHead(404).end(JSON.stringify({ message: deletedTask }))

      return res.writeHead(204).end()
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params

      const completedTask = database.completeTask(id)

      if (completedTask != undefined)
        return res.writeHead(404).end(JSON.stringify({ message: completedTask }))

      return res.writeHead(204).end()
    }
  }

]