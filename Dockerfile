FROM node:alpine as build
COPY package.json package-lock.json ./
RUN npm install && mkdir /desafio-app && mv ./node_modules ./desafio-app
WORKDIR /desafio-app
COPY . .
RUN npm run ng build

FROM nginx:alpine
COPY --from=build /desafio-app/dist/desafio/ /usr/share/nginx/html
COPY nginx/configuration.conf /etc/nginx/nginx.conf
