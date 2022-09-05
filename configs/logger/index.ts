import log4js from 'log4js'

log4js.configure('./configs/logger/log4js.json')

const logger = {
  access: log4js.getLogger('access'),
  debug: log4js.getLogger('debug'),
  express: log4js.connectLogger(log4js.getLogger('access'), {
    level: 'info'
  })
}

export default logger
