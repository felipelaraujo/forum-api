import type { Request } from 'express'

export class UpvoteService {
  public upvotePost(request: Request) {
    return {
      id: request.params.id,
      postContent: 'post',
      upvote: 1,
    }
  }

  public upvoteComment(request: Request) {
    return {
      id: request.params.id,
      commentContent: 'comment',
      upvote: 2,
    }
  }

  public upvoteReply(request: Request) {
    return {
      id: request.params.id,
      replyContent: 'reply',
      upvote: 3,
    }
  }
}
