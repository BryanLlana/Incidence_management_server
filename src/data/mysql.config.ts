import { DataSource } from 'typeorm'
import { Incidence } from './models/Incidence'

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
      entities: [Incidence],
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