import { fastify } from "fastify";
import { videosRoutes } from "./routes/videos.js";

const server = fastify()

server.register(videosRoutes)

server.listen({
  port: 8080
}).then(()=>{console.log(`Server is running in port ${server.server.address().port}`)})