########## build ##########
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build      

########## nginx ###########
FROM nginx:1.25-alpine
COPY --from=builder /app/build /usr/share/nginx/html   
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
