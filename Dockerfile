FROM oven/bun:1 as base
WORKDIR /usr/src/app

COPY package.json bun.lockb ./
RUN bun install
COPY . .

ENV NODE_ENV=prod

USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "index.ts", "start" ]
