import { DataSource } from 'typeorm'

import { PostsEntity } from './entities/posts.entity'
import { CommentsEntity } from './entities/comments.entity'
import { ReplysEntity } from './entities/replys.entity'

export const dbConnection = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [PostsEntity, CommentsEntity, ReplysEntity],
  subscribers: [],
  migrations: [],
})

dbConnection
  .initialize()
  .then(() => {
    console.info('Database connection has been initialized')
  })
  .catch((error) => {
    console.error('Error during database initialization. Error: ', error)
  })
