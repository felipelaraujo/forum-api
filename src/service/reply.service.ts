import type { Request } from 'express'

export class ReplyService {
  public replyComment(request: Request) {
    return {
      id: '1',
      replyContent: request.body.replyContent,
    }
  }
}
