FROM node:10

# Create app directory
WORKDIR /usr/src/app


COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3333
ENTRYPOINT [ "./docker-entrypoint.sh" ]

