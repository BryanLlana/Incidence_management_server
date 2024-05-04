import { DataSource } from 'typeorm'
import { Incidence } from './models/Incidence'
import { User } from './models/User'

interface Options {
  username: string,
  host: string,
  password: string,
  port: number,
  database: string
}

export class MysqlDB {
  public static async connect (options: Options) {
    const { username, host, password, port, database } = options
    const AppDataSource = new DataSource({
      type: 'mysql',
      username,
      host,
      password,
      port,
      database,
      entities: [Incidence, User],
      synchronize: true
    })

    try {
      await AppDataSource.initialize()
      console.log('Successful connection')
    } catch (error) {
      console.log('Connection failed')
    }
  }
}