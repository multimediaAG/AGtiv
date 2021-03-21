FROM tarampampam/node:13.1-alpine

LABEL maintainer="Hannes Rüger"
LABEL name="agtiv"

RUN apk add --no-cache python make g++ build-base
RUN apk add --no-cache cairo-dev jpeg-dev pango-dev giflib-dev
RUN apk --no-cache add msttcorefonts-installer fontconfig && update-ms-fonts && fc-cache -f
RUN mkdir -p /app/config && mkdir /app/dist && mkdir /app/data
COPY backend /app/dist
COPY frontend /app/dist/frontend
COPY container-env.json /container-env.json

EXPOSE 80
CMD    ["node", "/app/dist/index.js"]