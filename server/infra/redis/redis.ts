import { Redis, connect } from "../../deps.ts";

export async function getRedisConn():Promise<Redis>{
    return await connect({
        nodes: [
            {
                hostname: "redis-wn-1",
                port: 6379,
            },
        ],
    });
}