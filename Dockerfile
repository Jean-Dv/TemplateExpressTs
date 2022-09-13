FROM node:16-alpine

WORKDIR /home/code

ENV NODE_ENV=production
ENV PORT=3000

COPY package*.json ./
COPY build ./build

RUN npm install

EXPOSE 3000

CMD ["node", "build/bin/www.js"]