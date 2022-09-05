import express, { Application } from 'express'
import log4js, { Log4js } from 'log4js'

import ConfigEnv from '@configs/config.env'
import { homeRouter } from '@api/home/router'

export class Server {
  public logger!: any

  readonly app!: Application
  readonly routePrefix!: string

  private port!: string | number
  private log!: Log4js

  private static _instance: Server

  constructor () {
    if (Server._instance instanceof Server) {
      return Server._instance
    }
    this.app = express()
    this.routePrefix = '/api/v1'
    this.config()
    this.middlewares()
    this.routes()
    Server._instance = this
  }

  private config (): void {
    this.port = ConfigEnv.PORT
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
    if (ConfigEnv.NODE_ENV !== 'test') {
      this.app.listen(this.port, () => {
        this.logger.info(`[*] Server is running on port ${this.port}...`)
      })
    }
  }
}
