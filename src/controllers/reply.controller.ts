import type { Request, Response } from 'express'

import { ReplyService } from '../services/reply.service'
import { BAD_REQUEST, CREATED, OK } from '../helpers/utils.helper'

export class ReplyController {
  public async createReply(request: Request, response: Response) {
    try {
      const replyService = new ReplyService()

      await replyService.replyComment(request)

      response.status(CREATED)
      response.json({ message: 'created' })
    } catch (error) {
      response.status(BAD_REQUEST)
      response.json({ message: 'error', error })
    }
  }

  public async getReply(request: Request, response: Response) {
    try {
      const replyService = new ReplyService()

      const reply = await replyService.getReply(request)

      response.status(OK)
      response.json({
        message: 'ok',
        data: reply,
      })
    } catch (error) {
      response.status(BAD_REQUEST)
      response.json({
        message: 'error',
        error,
      })
    }
  }
}
