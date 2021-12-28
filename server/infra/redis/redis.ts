import { connect, Redis } from "../../deps.ts";

export async function getRedisConn():Promise<Redis>{
    return connect({
        hostname: "redis-container",
        port: 6379,
    });
}