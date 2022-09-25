import type { Request, Response } from 'express'

import { CommentService } from '../service/comment.service'
import type { SuccessResponse } from '../server/responses/success.response'
import type { FailResponse } from '../server/responses/fail.response'
import { BAD_REQUEST, CREATED } from '../helpers/utils.helper'

export class CommentController {
  public createComment(
    request: Request,
    response: Response
  ): SuccessResponse | FailResponse {
    try {
      const service = new CommentService()

      const successComment = service.makeComment(request)

      response.status(CREATED)
      response.json({ message: 'ok', data: successComment })

      return {
        message: 'ok',
        data: successComment,
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

  public getComment(request: Request, response: Response) {
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
