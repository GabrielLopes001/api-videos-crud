import {randomUUID} from 'node:crypto'

import { sql } from "./db.js";

export class DatabasePostgres{

  async list(){
    const videos = await sql`SELECT * FROM videos`

    return videos
  }

  async create(video){
    const videoId = randomUUID()
    const {title, description, duration} = video

    await sql`INSERT INTO videos (id, title, description, duration)
    VALUES (${videoId}, ${title}, ${description}, ${duration});`

  }
}