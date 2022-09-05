import 'module-alias/register'
import { Server } from '@root/server'

const server = new Server()
const appServer = server.app
const routePrefix = server.routePrefix
server.start()

export { server, appServer, routePrefix }
