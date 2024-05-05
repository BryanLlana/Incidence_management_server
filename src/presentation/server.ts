import express, { Router } from 'express'
import fileupload from 'express-fileupload'

interface Options {
  port: number,
  routes: Router,
  cors: Function
}

export class Server {
  private readonly app = express()
  private readonly port: number
  private readonly routes: Router
  private readonly cors: Function
  private serverListener?: any

  constructor(options: Options) {
    const { port, routes, cors } = options
    this.port = port
    this.cors = cors
    this.routes = routes
  }

  public start () {
    //* Cors
    this.app.use(this.cors())
    
    //* Middlewares
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(fileupload({
      limits: { fileSize: 50 * 1024 * 1024}
    }))
    
    //* Routes
    this.app.use(this.routes)


    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }

  public close () {
    this.serverListener?.close()
  }
}