FROM node:20.10-alpine AS base

WORKDIR /app

RUN npm i -g pnpm

COPY package.json pnpm-lock.yaml ./

ARG SWAPI_URL
ENV SWAPI_URL=${SWAPI_URL}

RUN pnpm install

COPY . .
RUN pnpm build

FROM node:20-alpine3.19 as release

WORKDIR /app
RUN npm i -g pnpm

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next
COPY --from=base /app/src ./src
COPY --from=base /app .

ENV SWAPI_URL=${SWAPI_URL}

EXPOSE 3000

CMD ["pnpm", "start"]