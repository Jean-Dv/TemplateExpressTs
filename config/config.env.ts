import dotenv from 'dotenv'

import { ENV, SanitizedEnv } from './types'

dotenv.config()

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: (process.env.PORT !== undefined) ? Number(process.env.PORT) : 8080
  }
}

const getSanitizedConfig = (config: ENV): SanitizedEnv => { 
  return config as SanitizedEnv
}

const config = getConfig()

const sanitizedConfig = getSanitizedConfig(config)

export default sanitizedConfig
