Ellatech Backend Service
Overview
This project is a small backend service built with NestJS, PostgreSQL, and TypeORM. It manages users, products, and transaction history, fulfilling the requirements of the Ellatech take-home exercise.

The service exposes the following RESTful API endpoints:

POST /users - Create a new user

POST /products - Create a new product

PUT /products/adjust - Adjust product details/quantity

GET /status/:productId - Get status of a product by ID

GET /transactions - List all transactions

Technology Stack
Node.js 20 (Alpine)

NestJS framework

TypeORM ORM

PostgreSQL database inside a Docker container

Docker and Docker Compose for local environment orchestration

Getting Started
Prerequisites
Docker and Docker Compose installed on your machine

Running Locally with Docker Compose
Clone the repository:

bash
git clone (https://github.com/yeab14/ellatech-backend.git)
cd ellatech-backend
Build and start the API and PostgreSQL DB containers:

bash
docker-compose up --build
This command will:

Start a PostgreSQL container with the database ellatech

Build and start the NestJS API container

Run npm install, TypeORM migrations, and launch the API in development mode

The API will be accessible at:
http://localhost:3001

API Documentation
Create User
Endpoint: POST /users

Body:

json
{
  "email": "user@example.com",
  "name": "User Name"
}
Response: Newly created user object with id, createdAt and updatedAt.

Create Product
Endpoint: POST /products

Body: (as per product DTO)

Response: Created product object.

Adjust Product
Endpoint: PUT /products/adjust

Body: (adjustment details)

Get Product Status
Endpoint: GET /status/:productId

Response: Current status of product.

List Transactions
Endpoint: GET /transactions

Response: Array of recorded transactions.

Notes and Assumptions
Validation is applied at DTO level using class-validator decorators.

TypeORM migrations are included and run on container startup.

The service uses Docker Compose for easy local environment setup.

API runs on port 3001 mapped to container's 3000.

PostgreSQL runs on default port 5432 within Docker.