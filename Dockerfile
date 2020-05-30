FROM node:10-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm install -g @angular/cli

EXPOSE 8080
EXPOSE 4200

CMD ["npm", "run", "start:mock:api"]
