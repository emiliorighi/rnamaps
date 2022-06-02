FROM node:latest as build-stage

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# production stage
FROM nginx:stable-alpine

#  copy the nginx.conf in our filesystem into the image filesystem
COPY default.conf.template /etc/nginx/templates/default.conf.template

COPY --from=build-stage /client/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
