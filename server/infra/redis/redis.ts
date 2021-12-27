import { connect, Redis } from "https://deno.land/x/redis/mod.ts";

export async function getRedisConn():Promise<Redis>{
    return connect({
        hostname: "redis-container",
        port: 6379,
    });
}