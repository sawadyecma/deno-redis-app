import { Router } from "https://deno.land/x/oak/mod.ts";

export const router = new Router();
router.get('/users', (ctx) => {
    ctx.response.body = 'Received a GET HTTP method';
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
