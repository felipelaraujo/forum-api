import type { Request, Response } from 'express'

import { UpvoteService } from '../services/upvote.service'
import { BAD_REQUEST, CREATED } from '../helpers/utils.helper'

export class UpvoteController {
  public upvotePost(request: Request, response: Response) {
    try {
      const upvoteService = new UpvoteService()

      const successUpvotePost = upvoteService.upvotePost(request)

      response.status(CREATED)
      response.json({ message: 'ok', data: successUpvotePost })
    } catch (error) {
      response.status(BAD_REQUEST)
      response.json({ message: 'error', error })
    }
  }

  public upvoteComment(request: Request, response: Response) {
    try {
      const upvoteService = new UpvoteService()

      const successUpvoteComment = upvoteService.upvoteComment(request)

      response.status(CREATED)
      response.json({ message: 'ok', data: successUpvoteComment })
    } catch (error) {
      response.status(BAD_REQUEST)
      response.json({ message: 'error', error })
    }
  }

  public upvoteReply(request: Request, response: Response) {
    try {
      const upvoteService = new UpvoteService()

      const successUpvoteReply = upvoteService.upvoteReply(request)

      response.status(CREATED)
      response.json({ message: 'ok', data: successUpvoteReply })
    } catch (error) {
      response.status(BAD_REQUEST)
      response.json({ message: 'error', error })
    }
  }
}
