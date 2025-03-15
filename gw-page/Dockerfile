FROM node:18.20.4

WORKDIR /src

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

RUN npm run build

CMD ["npm", "start"]
