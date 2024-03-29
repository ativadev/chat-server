
FROM node:16


WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install ./

COPY . .

# default port
EXPOSE 3000

CMD [ "npm", "run", "build-and-start" ]
