FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8011
CMD [ "node", "server.js"]
