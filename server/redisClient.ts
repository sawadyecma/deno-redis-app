import { Redis, RedisValue, Bulk } from "https://deno.land/x/redis/mod.ts";

export class RedisClient {
    public async set(redis: Redis, key: string, value: RedisValue){
        const ok = await redis.set(key, value);
        console.log("ok", ok);
    }

    public async get(redis: Redis, key: string): Promise<Bulk> {
        return await redis.get(key);
    }
}