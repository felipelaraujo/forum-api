import type { Request } from 'express'

export class PostService {
  public createPost(request: Request) {
    return {
      id: '1',
      postContent: request.body.postContent,
    }
  }

  public getPost(request: Request) {
    return {
      id: '1',
      postContent: request.body.postContent,
      upvotes: 10,
    }
  }
}
