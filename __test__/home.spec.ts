import request from 'supertest'

import { appServer, server, routePrefix } from '../app'

describe(`GET ${routePrefix}/ping`, () => {
  test('should return 200 and text pong', async () => {
    const response = await request(appServer)
      .get(`${routePrefix}/ping`)
    expect(response.statusCode).toBe(200)
    expect(response.body.message).toMatch('pong')
  })
})

afterAll(() => {
  server.close()
})
