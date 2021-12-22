import { Status } from "https://deno.land/std@0.118.0/http/http_status.ts";

console.log("http://localhost:8000/");
const server = Deno.listen({port:8000})

for await (const conn of server) {
    // ...handle the connection...
    (async () => {
        handle(conn)
    })();
}


async function handle(conn: Deno.Conn) {
    const httpConn = Deno.serveHttp(conn);
    for await (const requestEvent of httpConn) {
        await requestEvent.respondWith(new Response("hello\n", {status: Status.OK}))
    }
}