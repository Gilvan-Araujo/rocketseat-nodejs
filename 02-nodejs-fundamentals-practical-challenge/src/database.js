import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

export class Database {
  #database = {}

  constructor() {
    fs.readFile(databasePath, 'utf8')
      .then(data => {
        this.#database = JSON.parse(data)
      })
      .catch(() => {
        this.#persist()
      })
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  select(table, search) {
    let data = this.#database[table] ?? []

    if (search) {
      data = data.filter(row =>
        Object.entries(search).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase())
        })
      )
    }

    return data
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data)
    } else {
      this.#database[table] = [data]
    }

    this.#persist()

    return data
  }

  delete(table, id) {
    try {
      const rowIndex = this.#database[table].findIndex(row => row.id === id)
      if (rowIndex > -1) {
        this.#database[table].splice(rowIndex, 1)
        this.#persist()
      } else {
        return "Task not found!"
      }
    } catch (error) {
      return "Task not found!"
    }
  }

  update(table, id, data) {
    try {
      const rowIndex = this.#database[table].findIndex(row => row.id === id)
      if (rowIndex > -1) {
        const originalData = this.#database[table][rowIndex]
        this.#database[table][rowIndex] = {
          ...originalData, ...data, updated_at: new Date().toISOString()
        }
        this.#persist()
      } else {
        return "Task not found!"
      }
    } catch (error) {
      return "Task not found!"
    }
  }

  completeTask(id) {
    try {
      const taskIndex = this.#database.tasks.findIndex(task => task.id === id)

      if (taskIndex > -1) {
        this.#database.tasks[taskIndex].completed_at = new Date().toISOString()
        this.#database.tasks[taskIndex].updated_at = new Date().toISOString()
        this.#persist()
      } else {
        return "Task not found!"
      }
    } catch (error) {
      return "Task not found!"
    }
  }
}