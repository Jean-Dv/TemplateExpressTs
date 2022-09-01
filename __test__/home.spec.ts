import request from 'supertest'

import { appServer, routePrefix } from '../bin/www'

describe(`GET ${routePrefix}/ping`, () => {
  test('should return 200 and text pong', async () => {
    const response = await request(appServer)
      .get(`${routePrefix}/ping`)
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toMatch('pong')
  })
})
