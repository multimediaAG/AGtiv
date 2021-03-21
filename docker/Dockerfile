FROM node:14-buster

LABEL maintainer="Hannes Rüger"
LABEL name="agtiv"

RUN apk update && apk add --no-cache libc6-compat python make g++ build-base cairo-dev jpeg-dev pango-dev giflib-dev msttcorefonts-installer fontconfig && update-ms-fonts && fc-cache -f
RUN mkdir -p /app/config && mkdir /app/dist && mkdir /app/data
COPY backend /app/dist
COPY frontend /app/dist/frontend
COPY container-env.json /container-env.json

EXPOSE 80
CMD    ["node", "/app/dist/index.js"]