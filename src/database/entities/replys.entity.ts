import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { MaxLength } from 'class-validator'

@Entity({ name: 'replys' })
export class ReplysEntity {
  @PrimaryGeneratedColumn()
  id: number

  @MaxLength(4000)
  @Column({ length: 4000 })
  reply_content: string

  @Column()
  upvotes: number
}
