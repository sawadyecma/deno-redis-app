import { Router } from "https://deno.land/x/oak/mod.ts";
import { getHttpSample } from "./apiClient.ts";

export const router = new Router();
router.get('/users', async(ctx) => {
    ctx.response.body = 'Received a GET HTTP method';
    const resp = await getHttpSample()
    ctx.response.body = resp.body
});

router.post('/users', (ctx) => {
    ctx.response.body = 'Received a POST HTTP method';
});

router.put('/users/:userId', (ctx) => {
    ctx.response.body = `PUT HTTP method on user ${ctx.params.userId}`;
});

router.delete('/users/:userId', (ctx) => {
    ctx.response.body = `DELETE HTTP method on user ${ctx.params.userId}`;
});
