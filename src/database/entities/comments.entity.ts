import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { MaxLength } from 'class-validator'

import { ReplysEntity } from './replys.entity'

@Entity({ name: 'comments' })
export class CommentsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @MaxLength(4000)
  @Column({ length: 4000 })
  comment_content: string

  @Column()
  upvotes: number

  @OneToMany(() => ReplysEntity, (replys) => replys.reply_content)
  replys: ReplysEntity[]
}
