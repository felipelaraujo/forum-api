import type { Request, Response } from 'express'

import { PostService } from '../service/post.service'
import type { SuccessResponse } from '../server/responses/success.response'
import type { FailResponse } from '../server/responses/fail.response'
import { BAD_REQUEST, CREATED } from '../helpers/utils.helper'

export class PostController {
  public createPost(
    request: Request,
    response: Response
  ): SuccessResponse | FailResponse {
    try {
      const postService = new PostService()

      const successPost = postService.makePost(request)

      response.status(CREATED)
      response.json({ message: 'ok', data: successPost })

      return {
        message: 'ok',
        data: successPost,
      }
    } catch (error) {
      response.status(BAD_REQUEST)
      response.json({ message: 'error', error })

      return {
        message: 'error',
        error,
      }
    }
  }

  public getPost(request: Request, response: Response) {
    try {
      response.json({
        message: 'ok',
        data: 'data',
      })
    } catch (error) {
      response.json({
        message: 'error',
        error,
      })
    }
  }
}
