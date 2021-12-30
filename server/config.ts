const env = Deno.env.toObject()

export const serverPort = parseInt(env["SERVER_PORT"])

export const redisHost = env["REDIS_HOST"]
export const redisPort = parseInt(env["REDIS_PORT"])