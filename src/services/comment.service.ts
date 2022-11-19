import type { Request } from 'express'

import { dbConnection } from '../database/config-typeorm'
import { CommentsEntity } from '../database/entities/comments.entity'
import { PostService } from './post.service'

export class CommentService {
  public async createComment(request: Request) {
    const comment = new CommentsEntity()
    const postService = new PostService()

    comment.comment_content = request.body.commentContent
    comment.post = await postService.getPost(request)

    return dbConnection.manager.save(comment)
  }

  public getAllPostComments(
    request: Request
  ): Promise<CommentsEntity[] | null> {
    return dbConnection
      .getRepository(CommentsEntity)
      .createQueryBuilder('comment')
      .where('comment.post.id = :postId', {
        postId: request.params.postId,
      })
      .leftJoinAndSelect('comment.post', 'post')
      .leftJoinAndSelect('comment.replys', 'replys')
      .getMany()
  }

  public getCommentById(request: Request): Promise<CommentsEntity | null> {
    return dbConnection
      .getRepository(CommentsEntity)
      .createQueryBuilder('comment')
      .where('comment.id = :commentId AND comment.post.id = :postId', {
        commentId: request.params.commentId,
        postId: request.params.postId,
      })
      .leftJoinAndSelect('comment.post', 'post')
      .leftJoinAndSelect('comment.replys', 'replys')
      .getOne()
  }
}
