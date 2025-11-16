FROM node:20-alpine

# Install bash & postgres client
RUN apk add --no-cache bash postgresql-client

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files and scripts
COPY . .
COPY wait-for-postgres.sh ./wait-for-postgres.sh
RUN chmod +x wait-for-postgres.sh

# Build the project
RUN npm run build

EXPOSE 3000

# Run wait-for-postgres, migrations, then start dev server
CMD ["sh", "-c", "./wait-for-postgres.sh $DATABASE_HOST && npm run migration:run && npm run start:dev"]
