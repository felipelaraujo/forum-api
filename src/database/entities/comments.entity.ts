import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { MaxLength } from 'class-validator'

import { ReplysEntity } from './replys.entity'
import { PostsEntity } from './posts.entity'

@Entity({ name: 'comments' })
export class CommentsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @MaxLength(4000)
  @Column({ length: 4000 })
  comment_content: string

  @Column({ nullable: true })
  upvotes: number

  @ManyToOne(() => PostsEntity, (post) => post.comments)
  post: PostsEntity | null

  @OneToMany(() => ReplysEntity, (replys) => replys.comment)
  replys: ReplysEntity[]
}
