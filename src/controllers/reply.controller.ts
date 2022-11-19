import type { Request, Response } from 'express'

import { ReplyService } from '../services/reply.service'
import { CREATED, OK } from '../helpers/utils.helper'

export class ReplyController {
  public async replyComment(request: Request, response: Response) {
    const replyService = new ReplyService()

    const reply = await replyService.replyComment(request)

    response.status(CREATED)
    response.json({ message: 'created', data: reply })
  }

  public async getAllReplys(request: Request, response: Response) {
    const replyService = new ReplyService()

    const replys = await replyService.getAllReplys(request)

    response.status(OK)
    response.json({
      message: 'ok',
      data: replys,
    })
  }

  public async getReplyById(request: Request, response: Response) {
    const replyService = new ReplyService()

    const reply = await replyService.getReplyById(request)

    response.status(OK)
    response.json({
      message: 'ok',
      data: reply,
    })
  }
}
