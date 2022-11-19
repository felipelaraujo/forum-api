import type { Request, Response } from 'express'

import { PostService } from '../services/post.service'
import { CREATED, OK } from '../helpers/utils.helper'

export class PostController {
  public async createPost(request: Request, response: Response) {
    const postService = new PostService()

    const savedPost = await postService.createPost(request)

    response.status(CREATED)
    response.json({ message: 'created', data: savedPost })
  }

  public async getPost(request: Request, response: Response) {
    const postService = new PostService()

    const post = await postService.getPost(request)

    response.status(OK)
    response.json({
      message: 'ok',
      data: post,
    })
  }
}
