import type { Request, Response } from 'express'

import { CommentService } from '../services/comment.service'
import { BAD_REQUEST, CREATED, OK } from '../helpers/utils.helper'

export class CommentController {
  public async createComment(request: Request, response: Response) {
    try {
      const service = new CommentService()

      const savedComment = await service.makeComment(request)

      response.status(CREATED)
      response.json({ message: 'created', data: savedComment })
    } catch (error) {
      response.status(BAD_REQUEST)
      response.json({ message: 'error', error })
    }
  }

  public async getComment(request: Request, response: Response) {
    try {
      const commentService = new CommentService()

      const comment = await commentService.getComment(request)

      response.status(OK)
      response.json({
        message: 'ok',
        data: comment,
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
