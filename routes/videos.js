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

  server.put('/videos/:id', async (request, replay) => {
    const id = request.params.id
    const {title, description, duration} = request.body
    console.log(title)
    console.log(id)

      await database.update(id,{
      title,
      description,
      duration
    })

    replay.status(204).send()
    
  })

  server.delete('/videos/:id', async (request, replay) => {
    const id = request.params.id

    await database.delete(id)
  })

}