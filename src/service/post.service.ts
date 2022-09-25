import type { Request } from 'express'

export class PostService {
  public makePost(request: Request) {
    return {
      id: '1',
      postContent: request.body.postContent,
    }
  }
}
