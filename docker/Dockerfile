FROM tarampampam/node:12-alpine

LABEL maintainer="Hannes Rüger"
LABEL name="agtiv"

RUN apk update && apk add --no-cache npm libc6-compat python make g++ build-base cairo-dev jpeg-dev pango-dev giflib-dev msttcorefonts-installer fontconfig && update-ms-fonts && fc-cache -f
RUN mkdir -p /app/config && mkdir /app/dist && mkdir /app/data
# RUN ln -s /lib64/ld-linux-x86-64.so.2 /lib/ld-linux-x86-64.so.2
RUN ln -s /lib64/* /lib
COPY backend /app/dist
RUN cd /app/dist/ && npm i && npm run build && cd /
COPY frontend /app/dist/frontend
COPY container-env.json /container-env.json

EXPOSE 80
CMD    ["node", "/app/dist/build/index.js"]