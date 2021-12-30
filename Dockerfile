FROM denoland/deno

COPY ./server .

EXPOSE 8000

RUN deno install -qAf --unstable https://raw.githubusercontent.com/nnmrts/denon/patch-4/denon.ts

CMD denon run --allow-net server.ts
