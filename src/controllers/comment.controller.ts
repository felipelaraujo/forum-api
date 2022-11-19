import type { Request, Response } from 'express'

import { CommentService } from '../services/comment.service'
import { CREATED, OK } from '../helpers/utils.helper'

export class CommentController {
  public async createComment(request: Request, response: Response) {
    const service = new CommentService()

    const savedComment = await service.createComment(request)

    response.status(CREATED)
    response.json({ message: 'created', data: savedComment })
  }

  public async getAllPostComments(request: Request, response: Response) {
    const commentService = new CommentService()

    const comments = await commentService.getAllPostComments(request)

    response.status(OK)
    response.json({
      message: 'ok',
      data: comments,
    })
  }

  public async getCommentById(request: Request, response: Response) {
    const commentService = new CommentService()

    const comment = await commentService.getCommentById(request)

    response.status(OK)
    response.json({
      message: 'ok',
      data: comment,
    })
  }
}
