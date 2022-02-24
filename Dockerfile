FROM node:14
WORKDIR /app

COPY package*.json ./
COPY . .

ENV SOCKET_HOST=http://socket-service:3004

RUN npm install && \
    npm install -g serve

EXPOSE 3000
ENTRYPOINT ["serve", "-s", "build"]