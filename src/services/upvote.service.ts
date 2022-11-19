import type { Request } from 'express'

import { dbConnection } from '../database/config-typeorm'
import { PostsEntity } from '../database/entities/posts.entity'

export class UpvoteService {
  // TODO: não dá update
  public async upvotePost(request: Request) {
    const post = await dbConnection
      .getRepository(PostsEntity)
      .createQueryBuilder('post')
      .where('post.id = :postId', { postId: request.params.postId })
      .getOne()

    const upvotes = (post?.upvotes as number) + 1

    return dbConnection
      .getRepository(PostsEntity)
      .createQueryBuilder('post')
      .update({ upvotes })
      .where('post.id = :postId', { postId: request.params.postId })
      .execute()
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
