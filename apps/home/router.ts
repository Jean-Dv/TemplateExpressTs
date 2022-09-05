import { Router } from 'express'

import { HomeHttpHandler } from '@apps/home/http'

export const homeRouter = Router()
const homeHttpHandler = new HomeHttpHandler()

homeRouter.route('/')
  .get(homeHttpHandler.getPing)
