FROM node:18-alpine
WORKDIR /app

# 1. install deps
COPY package*.json ./
RUN npm ci --omit=dev

# 2. copy source
COPY . .

EXPOSE 3000
CMD ["npm","start"]
