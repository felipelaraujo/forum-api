import type { Request } from 'express'

import { dbConnection } from '../database/config-typeorm'
import { ReplysEntity } from '../database/entities/replys.entity'
import { CommentService } from './comment.service'

export class ReplyService {
  public async replyComment(request: Request) {
    const reply = new ReplysEntity()
    const commentService = new CommentService()

    reply.reply_content = request.body.replyContent
    reply.comment = await commentService.getCommentById(request)

    return dbConnection.manager.save(reply)
  }

  public getAllReplys(request: Request): Promise<ReplysEntity[] | null> {
    return dbConnection
      .getRepository(ReplysEntity)
      .createQueryBuilder('reply')
      .where('reply.comment.id = :commentId', {
        commentId: request.params.commentId,
      })
      .leftJoinAndSelect('reply.comment', 'comment')
      .getMany()
  }

  public getReplyById(request: Request): Promise<ReplysEntity | null> {
    return dbConnection
      .getRepository(ReplysEntity)
      .createQueryBuilder('reply')
      .where('reply.id = :replyId AND reply.comment.id = :commentId', {
        replyId: request.params.replyId,
        commentId: request.params.commentId,
      })
      .getOne()
  }
}
