FROM node:20-alpine


RUN apk add --no-cache bash postgresql-client

WORKDIR /app


COPY package*.json ./
RUN npm install


COPY . .
COPY wait-for-postgres.sh ./wait-for-postgres.sh
RUN chmod +x wait-for-postgres.sh


RUN npm run build

EXPOSE 3000


CMD ["sh", "-c", "./wait-for-postgres.sh $DATABASE_HOST && npm run migration:run && npm run start:dev"]
