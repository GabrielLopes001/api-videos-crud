import { DatabasePostgres } from "../database-postgres.js"

export async function videosRoutes(server){

  const database = new DatabasePostgres()

  server.get('/videos', async () => {

    const videos = await database.list()
    
    return videos
  })

  server.post('/videos', async (request, replay) => {
    const {title, description, duration} = request.body

    await database.create({
      title,
      description,
      duration
    })

    replay.status(204).send()
  })

}