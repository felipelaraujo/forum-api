import type { Request, Response } from 'express'

import { ReplyService } from '../services/reply.service'
import { BAD_REQUEST, CREATED, OK } from '../helpers/utils.helper'

export class ReplyController {
  public createReply(request: Request, response: Response) {
    try {
      const replyService = new ReplyService()

      const successReply = replyService.replyComment(request)

      response.status(CREATED)
      response.json({ message: 'ok', data: successReply })
    } catch (error) {
      response.status(BAD_REQUEST)
      response.json({ message: 'error', error })
    }
  }

  public getReply(request: Request, response: Response) {
    try {
      const replyService = new ReplyService()

      const reply = replyService.getReply(request)

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
