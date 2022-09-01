import express, { Application } from 'express'
import log4js, { Log4js } from 'log4js'

import { homeRouter } from '../api/home/router'

export class Server {
  public logger!: any

  readonly app!: Application
  readonly routePrefix!: string

  private port!: string | number
  private log!: Log4js
  private listen: any

  private static singletonServer: Server

  constructor () {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (Server.singletonServer) {
      return Server.singletonServer
    }
    this.app = express()
    this.routePrefix = '/api/1.0'
    this.config()
    this.middlewares()
    this.routes()
    Server.singletonServer = this
  }

  private config (): void {
    this.port = (process.env.PORT != null ? process.env.PORT : 8080)
    this.log = log4js
    this.log.configure('./config/log4js.json')
    this.logger = this.log.getLogger('server')
  }

  private middlewares (): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
  }

  private routes (): void {
    this.app.use(`${this.routePrefix}/ping`, homeRouter)
  }

  start (): void {
    this.listen = this.app.listen(this.port, () => {
      this.logger.info(`[*] Server is running on port ${this.port}...`)
    })
  }

  close (): void {
    this.listen.close()
  }
}
