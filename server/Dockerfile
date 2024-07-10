
FROM node:20-alpine

WORKDIR /server

COPY . .

RUN npm install -g npm@latest
RUN npm install
RUN npm run build

EXPOSE 3000

CMD source start.sh