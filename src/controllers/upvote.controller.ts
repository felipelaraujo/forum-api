import type { Request, Response } from 'express'

import { UpvoteService } from '../services/upvote.service'
import { CREATED } from '../helpers/utils.helper'

export class UpvoteController {
  public upvotePost(request: Request, response: Response) {
    const upvoteService = new UpvoteService()

    const successUpvotePost = upvoteService.upvotePost(request)

    response.status(CREATED)
    response.json({ message: 'ok', data: successUpvotePost })
  }

  public upvoteComment(request: Request, response: Response) {
    const upvoteService = new UpvoteService()

    const successUpvoteComment = upvoteService.upvoteComment(request)

    response.status(CREATED)
    response.json({ message: 'ok', data: successUpvoteComment })
  }

  public upvoteReply(request: Request, response: Response) {
    const upvoteService = new UpvoteService()

    const successUpvoteReply = upvoteService.upvoteReply(request)

    response.status(CREATED)
    response.json({ message: 'ok', data: successUpvoteReply })
  }
}
