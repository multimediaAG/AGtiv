FROM node:14.16.0-buster

LABEL maintainer="Hannes Rüger"
LABEL name="agtiv"

RUN apt-get update && apt-get -y install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
RUN mkdir -p /app/config && mkdir /app/dist && mkdir /app/data && mkdir /assets
COPY backend /app/dist
COPY frontend /app/dist/frontend
COPY worldmap.png /assets/worldmap.png
COPY container-env.json /container-env.json

EXPOSE 80
CMD    ["node", "/app/dist/index.js"]