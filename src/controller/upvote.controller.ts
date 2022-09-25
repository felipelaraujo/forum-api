import type { Request, Response } from 'express'

import type { SuccessResponse } from '../server/responses/success.response'
import type { FailResponse } from '../server/responses/fail.response'
import { UpvoteService } from '../service/upvote.service'
import { BAD_REQUEST, CREATED } from '../helpers/utils.helper'

export class UpvoteController {
  public upvotePost(
    request: Request,
    response: Response
  ): SuccessResponse | FailResponse {
    try {
      const upvoteService = new UpvoteService()

      const successUpvotePost = upvoteService.upvotePost(request)

      response.status(CREATED)
      response.json({ message: 'ok', data: successUpvotePost })

      return {
        message: 'ok',
        data: successUpvotePost,
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

  public upvoteComment(
    request: Request,
    response: Response
  ): SuccessResponse | FailResponse {
    try {
      const upvoteService = new UpvoteService()

      const successUpvoteComment = upvoteService.upvoteComment(request)

      response.status(CREATED)
      response.json({ message: 'ok', data: successUpvoteComment })

      return {
        message: 'ok',
        data: successUpvoteComment,
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

  public upvoteReply(
    request: Request,
    response: Response
  ): SuccessResponse | FailResponse {
    try {
      const upvoteService = new UpvoteService()

      const successUpvoteReply = upvoteService.upvoteReply(request)

      response.status(CREATED)
      response.json({ message: 'ok', data: successUpvoteReply })

      return {
        message: 'ok',
        data: successUpvoteReply,
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
}
