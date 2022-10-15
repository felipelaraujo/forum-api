import type { Request } from 'express'

import { dbConnection } from '../database/config-typeorm'
import { CommentsEntity } from '../database/entities/comments.entity'
import { PostService } from './post.service'

export class CommentService {
  public async makeComment(request: Request) {
    const comment = new CommentsEntity()
    const postService = new PostService()

    comment.comment_content = request.body.commentContent
    comment.post = await postService.getPost(request)

    return dbConnection.manager.save(comment)
  }

  public getComment(request: Request): Promise<CommentsEntity | null> {
    return dbConnection
      .getRepository(CommentsEntity)
      .createQueryBuilder('comment')
      .where('comment.id = :id AND comment.post.id = :postId', {
        id: request.params.commentId,
        postId: request.params.postId,
      })
      .leftJoinAndSelect('comment.post', 'post')
      .getOne()
  }
}
