import type { Request } from 'express'

export class CommentService {
  public makeComment(request: Request) {
    return {
      id: '1',
      commentContent: request.body.commentContent,
    }
  }

  public getComment(request: Request) {
    return {
      id: '1',
      commentContent: request.body.commentContent,
      upvotes: 20,
    }
  }
}
