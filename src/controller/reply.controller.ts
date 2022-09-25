import type { Request, Response } from 'express'

import type { SuccessResponse } from '../server/responses/success.response'
import type { FailResponse } from '../server/responses/fail.response'
import { ReplyService } from '../service/reply.service'
import { BAD_REQUEST, CREATED } from '../helpers/utils.helper'

export class ReplyController {
  public createReply(
    request: Request,
    response: Response
  ): SuccessResponse | FailResponse {
    try {
      const replyService = new ReplyService()

      const successReply = replyService.replyComment(request)

      response.status(CREATED)
      response.json({ message: 'ok', data: successReply })

      return {
        message: 'ok',
        data: successReply,
      }
    } catch (error) {
      response.status(BAD_REQUEST)
      response.json({ message: 'error', error })

      return {
        message: 'error',
        error,
      }
    }
  }

  public getReply(request: Request, response: Response) {
    try {
      response.json({
        message: 'ok',
        data: 'data',
      })
    } catch (error) {
      response.json({
        message: 'error',
        error,
      })
    }
  }
}
