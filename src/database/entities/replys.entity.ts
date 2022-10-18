import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { MaxLength } from 'class-validator'

import { CommentsEntity } from './comments.entity'

@Entity({ name: 'replys' })
export class ReplysEntity {
  @PrimaryGeneratedColumn()
  id: number

  @MaxLength(4000)
  @Column({ length: 4000 })
  reply_content: string

  @Column({ nullable: true })
  upvotes: number

  @ManyToOne(() => CommentsEntity, (comment) => comment.replys)
  comment: CommentsEntity | null // TODO: ver se esse null tá correto
}
