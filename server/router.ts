import { Router } from "./deps.ts";
import { getHttpSample } from "./apiClient.ts";
import { getRedisConn } from "./infra/redis/redis.ts";
import { RedisClient } from "./redisClient.ts";

export const router = new Router();

router.get("/", (ctx)=>{
    ctx.response.body = "\ndeno-redis-app !\n";
})

router.get('/users', async(ctx) => {
    const resp = await getHttpSample()
    ctx.response.body = resp.body
    const redisConn = await getRedisConn()
    const redisClient = new RedisClient()

    const key = "key02"
    const value = await redisClient.get(redisConn, key);

    ctx.response.body = JSON.stringify({
        title: 'Received a GET HTTP method',
        value,
    })
});

router.post('/users', async(ctx) => {
    ctx.response.body = 'Received a POST HTTP method';

    const redisConn = await getRedisConn()
    const redisClient = new RedisClient()
    const key = "key04"
    await redisClient.set(redisConn, key, "value04");
});

router.put('/users/:userId', (ctx) => {
    ctx.response.body = `PUT HTTP method on user ${ctx.params.userId}`;
});

router.delete('/users/:userId', (ctx) => {
    ctx.response.body = `DELETE HTTP method on user ${ctx.params.userId}`;
});
