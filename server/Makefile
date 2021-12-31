server: 
	deno run --allow-net server.ts

server/dev:
	SERVER_PORT=4000 deno run --allow-net --allow-env --watch=./ server.ts

container/build:
	docker build . -t deno-server

container/run:
	docker run --name deno-server -p 8000:8000 deno-server 

