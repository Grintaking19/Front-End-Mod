# stage1 as builder
FROM node:10-alpine as builder

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

#can be changed later according to what the front end will settle to us
RUN npm install 

COPY . .

# Build the project and copy the files
RUN npm run build

#Stage 2 for nginx configuration
FROM nginx:alpine

#!/bin/sh

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /var/www/html/*

# Copy from the stage 1 the build folder
COPY --from=builder /app/build /var/www/html

#nginx configuration file
#copy the configuration file to conf.d
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

#These files are related to configuring NGINX web server to use SSL/TLS encryption.

#COPY ./nginx/nginx.key /etc/nginx/certs/nginx.key

#COPY ./nginx/nginx-certificate.crt /etc/nginx/certs/nginx-certificate.crt


EXPOSE 3001 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
