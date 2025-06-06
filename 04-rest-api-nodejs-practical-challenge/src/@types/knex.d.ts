// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: string
      name: string
    }

    meals: {
      id: string
      name: string
      description: string
      date: string
      isDiet: boolean
      user_id: string
    }
  }
}
