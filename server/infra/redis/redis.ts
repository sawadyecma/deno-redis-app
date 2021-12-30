import { redisHost, redisPort } from "../../config.ts";
import { Redis, connect  } from "../../deps.ts";

export async function getRedisConn():Promise<Redis>{
    return await connect({
        nodes: [
            {
                hostname: redisHost,
                port: redisPort,
            },
        ],
    });
}