FROM denoland/deno

COPY ./server .

EXPOSE 8000

CMD deno run --allow-net --allow-env --watch=. server.ts
