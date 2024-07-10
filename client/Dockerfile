FROM node:20-alpine AS build
WORKDIR /client
COPY package.json .
RUN npm install -g npm@latest
RUN npm i
COPY . .
RUN npm run build
EXPOSE 5173

CMD npx serve -p 5173 -s dist