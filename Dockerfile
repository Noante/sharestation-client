FROM node:14
WORKDIR /app

COPY sharestation-client/package*.json ./
COPY sharestation-client/. .

ENV SOCKET_HOST=http://socket-service:3004

RUN npm install

EXPOSE 3000
ENTRYPOINT ["npm", "start"]