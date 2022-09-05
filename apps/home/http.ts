import { Request, Response } from 'express'

export class HomeHttpHandler {
  /**
     * @param {Request|any} req -> Request of client
     * @return {Response} res -> Response of server
     */
  getPing (_req: Request, res: Response): Response {
    return res.status(200).json({
      ok: true,
      message: 'pong'
    })
  }
}
