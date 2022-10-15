import type { Request } from 'express'

import { dbConnection } from '../database/config-typeorm'
import { PostsEntity } from '../database/entities/posts.entity'

export class PostService {
  public async createPost(request: Request) {
    const post = new PostsEntity()

    post.post_content = request.body.postContent

    return dbConnection.manager.save(post)
  }

  public async getPost(request: Request): Promise<PostsEntity | null> {
    return dbConnection
      .getRepository(PostsEntity)
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.comments', 'comment')
      .where('post.id = :postId', { postId: request.params.postId })
      .getOne()
  }
}
