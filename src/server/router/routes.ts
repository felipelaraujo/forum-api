import type { Express } from 'express'

import { PostController } from '../../controllers/post.controller'
import { CommentController } from '../../controllers/comment.controller'
import { ReplyController } from '../../controllers/reply.controller'
import { UpvoteController } from '../../controllers/upvote.controller'

export function configRoutes(server: Express) {
  const postController = new PostController()
  const commentController = new CommentController()
  const replyController = new ReplyController()
  const upvoteController = new UpvoteController()

  const baseUrl = '/post'

  // POST
  server.post(baseUrl, postController.createPost)
  server.get(`${baseUrl}/:postId`, postController.getPost)

  // COMMENT
  server.post(`${baseUrl}/:postId/comment`, commentController.createComment)
  server.get(
    `${baseUrl}/:postId/comments`,
    commentController.getAllPostComments
  )
  server.get(
    `${baseUrl}/:postId/comment/:commentId`,
    commentController.getCommentById
  )

  // REPLY
  server.post(
    `${baseUrl}/:postId/comment/:commentId/reply`,
    replyController.replyComment
  )
  server.get(
    `${baseUrl}/:postId/comment/:commentId/replys`,
    replyController.getAllReplys
  )

  server.get(
    `${baseUrl}/:postId/comment/:commentId/reply/:replyId`,
    replyController.getReplyById
  )

  // UPVOTE
  // TODO: Upvote vai ter que ter verificação pra receber 1 curtida por usuário (como identificar usuário?)
  server.patch(`${baseUrl}/:postId/upvote`, upvoteController.upvotePost)
  server.patch(
    `${baseUrl}/:postId/comment/:commentId/upvote`,
    upvoteController.upvoteComment
  )
  server.patch(
    `${baseUrl}/:postId/comment/:commentId/reply/:replyId/upvote`,
    upvoteController.upvoteReply
  )
}
