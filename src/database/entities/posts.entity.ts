import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { MaxLength } from 'class-validator'

import { CommentsEntity } from './comments.entity'

@Entity({ name: 'posts' })
export class PostsEntity {
  @PrimaryGeneratedColumn()
  id: number

  @MaxLength(4000)
  @Column({ length: 4000 })
  post_content: string

  @Column()
  upvotes: number

  @OneToMany(() => CommentsEntity, (comment) => comment.comment_content)
  comments: CommentsEntity[]
}
