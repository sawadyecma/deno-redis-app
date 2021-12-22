import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

const router = new Router();
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

app.use(router.routes());

await app.listen({ port: 8000 });

