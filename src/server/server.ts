import express from 'express'

export function startServer() {
  const app = express()

  app.use(express.json())

  app.listen(process.env.PORT, () => {
    console.info(`[INFO] App running at http://localhost:${process.env.PORT}`)
  })

  return app
}
