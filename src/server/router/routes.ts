import type { Express } from 'express'

import { PostController } from '../../controller/post.controller'
import { CommentController } from '../../controller/comment.controller'
import { ReplyController } from '../../controller/reply.controller'
import { UpvoteController } from '../../controller/upvote.controller'

export function configRoutes(server: Express) {
  const postController = new PostController()
  const commentController = new CommentController()
  const replyController = new ReplyController()
  const upvoteController = new UpvoteController()

  const baseUrl = '/post'

  server.post(baseUrl, postController.createPost)
  server.get(`${baseUrl}/:id`, postController.getPost)

  server.post(`${baseUrl}/:id/comment`, commentController.createComment)
  server.get(`${baseUrl}/:id/comment/:id`, commentController.getComment)

  server.post(`${baseUrl}/:id/comment/:id/reply`, replyController.createReply)
  server.get(`${baseUrl}/:id/comment/:id/reply/:id`, replyController.getReply)

  server.patch(`${baseUrl}/:id/upvote`, upvoteController.upvotePost)
  server.patch(
    `${baseUrl}/:id/comment/:id/upvote`,
    upvoteController.upvoteComment
  )
  server.patch(
    `${baseUrl}/:id/comment/:id/reply/:id/upvote`,
    upvoteController.upvoteReply
  )
}
