import { CorsAdapter, envs } from "./config"
import { MysqlDB } from "./data"
import { Server } from "./presentation"
import { AppRoutes } from "./presentation/routes"
import 'reflect-metadata'

const main = async () => {
  const configDatabase = {
    username: envs.DATABASE_USERNAME,
    host: envs.DATABASE_HOST,
    password: envs.DATABASE_PASSWORD,
    port: envs.DATABASE_PORT,
    database: envs.DATABASE_NAME
  }
  await MysqlDB.connect(configDatabase)

  const port = envs.PORT
  const routes = AppRoutes.routes
  const cors = CorsAdapter.create()
  const server = new Server({ port, routes, cors })
  server.start()
}

main()