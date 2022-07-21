import { Server } from './bin/server'
import dotenv from 'dotenv'

dotenv.config()
const server = new Server()
const appServer = server.app
const logger = server.logger
const routePrefix = server.routePrefix
server.start()

export { server, appServer, routePrefix, logger }
