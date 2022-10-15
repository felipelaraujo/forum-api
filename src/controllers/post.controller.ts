import type { Request, Response } from 'express'

import { PostService } from '../services/post.service'
import { BAD_REQUEST, CREATED, OK } from '../helpers/utils.helper'

export class PostController {
  public async createPost(request: Request, response: Response) {
    try {
      const postService = new PostService()

      const savedPost = await postService.createPost(request)

      response.status(CREATED)
      response.json({ message: 'created', data: savedPost })
    } catch (error) {
      response.status(BAD_REQUEST)
      response.json({ message: 'error', error })
    }
  }

  public async getPost(request: Request, response: Response) {
    try {
      const postService = new PostService()

      const post = await postService.getPost(request)

      response.status(OK)
      response.json({
        message: 'ok',
        data: post,
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
