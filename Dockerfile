# Stage 1: Build production React static assets
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve using Nginx on Port 3000 as per Capstone Requirement
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 3000
RUN sed -i 's/listen\(.*\)80;/listen 3000;/g' /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
