import type { Request } from 'express'

import { dbConnection } from '../database/config-typeorm'
import { ReplysEntity } from '../database/entities/replys.entity'

export class ReplyService {
  public async replyComment(request: Request) {
    return dbConnection
      .createQueryBuilder()
      .insert()
      .into(ReplysEntity)
      .values({
        reply_content: request.body.replyContent,
      })
      .execute()
  }

  public getReply(request: Request): Promise<ReplysEntity | null> {
    return dbConnection
      .getRepository(ReplysEntity)
      .createQueryBuilder('reply')
      .where('comment.id = :commentId AND reply.id = :replyId', {
        commentId: request.params.commentId,
        replyId: request.params.replyId,
      })
      .getOne()
  }
}
