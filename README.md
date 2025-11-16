Ellatech Backend Service

Overview

This project is a small backend service built with NestJS, PostgreSQL, and TypeORM. It manages users, products, and transaction history, fulfilling the requirements of the Ellatech take-home exercise.

The service exposes the following RESTful API endpoints:
```
➤ POST /users - Create a new user

➤ POST /products - Create a new product

➤ PUT /products/adjust - Adjust product details/quantity

➤ GET /status/:productId - Get status of a product by ID

➤ GET /transactions - List all transactions
```

Technology Stack
```
➤ Node.js 20 (Alpine)

➤ NestJS framework

➤ TypeORM ORM

➤ PostgreSQL database inside a Docker container

➤ Docker and Docker Compose for local environment orchestration
```

Getting Started

Prerequisites
```
Docker and Docker Compose installed on your machine
```
Running Locally with Docker Compose

Clone the repository:

```
git clone (https://github.com/yeab14/ellatech-backend.git)
```
```
cd ellatech-backend
```

Build and start the API and PostgreSQL DB containers:

```
docker-compose up --build
```
This command will:

➤ Start a PostgreSQL container with the database ellatech

➤ Build and start the NestJS API container

```
Run npm install, TypeORM migrations, and launch the API in development mode
```

The API will be accessible at:
```
http://localhost:3000
```

API Documentation

Create User
Endpoint: POST /users

Body:
```
json
{
"email": "yeab149@gmail.com",
"name": "yeab",
}
```
Response: Newly created user object with id, createdAt and updatedAt.

```
{
    "id": "43794156-b38c-4b40-8e0b-dc997660c3be",
    "email": "yeab149@gmail.com",
    "name": "yeab",
    "createdAt": "2025-11-16T17:07:01.330Z",
    "updatedAt": "2025-11-16T17:07:01.330Z"
}
```

Create Product
Endpoint: POST /products

Body:
```
json
{
  "name": "iphone 14",
  "description": "iphone 14 with 128 GB",
  "quantity": 10
}
```

Response: Created product object.
```
{
    "id": "f677edc3-35a7-490d-9fdb-7c9e2b2d950f",
    "name": "iphone 14",
    "description": "iphone 14 with 128 GB",
    "quantity": 10,
    "createdAt": "2025-11-16T17:09:09.690Z",
    "updatedAt": "2025-11-16T17:09:09.690Z"
}
```

Adjust Product
Endpoint: PUT /products/adjust

Body: 
```
json
 {
  "productId": "f677edc3-35a7-490d-9fdb-7c9e2b2d950f",
  "adjustment": 15
}
```
Response: Updated product object.

```
{
    "id": "f677edc3-35a7-490d-9fdb-7c9e2b2d950f",
    "name": "iphone 14",
    "description": "iphone 14 with 128 GB",
    "quantity": 25,
    "createdAt": "2025-11-16T17:09:09.690Z",
    "updatedAt": "2025-11-16T17:10:34.659Z"
}
```
Get Product Status
Endpoint: GET /status/:productId

Example: http://localhost:3000/products/status/f677edc3-35a7-490d-9fdb-7c9e2b2d950f

Response: Current status of product.

```
{
    "id": "f677edc3-35a7-490d-9fdb-7c9e2b2d950f",
    "name": "iphone 14",
    "description": "iphone 14 with 128 GB",
    "quantity": 25,
    "createdAt": "2025-11-16T17:09:09.690Z",
    "updatedAt": "2025-11-16T17:10:34.659Z"
}
```

List Transactions

Endpoint: GET /transactions

Example: http://localhost:3000/transactions

```
[
    {
        "id": "41ab289b-c577-470c-8610-a8e44dcd449a",
        "product": {
            "id": "f677edc3-35a7-490d-9fdb-7c9e2b2d950f",
            "name": "iphone 14",
            "description": "iphone 14 with 128 GB",
            "quantity": 25,
            "createdAt": "2025-11-16T17:09:09.690Z",
            "updatedAt": "2025-11-16T17:10:34.659Z"
        },
        "quantityChanged": 15,
        "createdAt": "2025-11-16T17:10:34.659Z"
    }
]
```
Response: Array of recorded transactions.

Notes and Assumptions

➤ Validation is applied at DTO level using class-validator decorators.

➤ TypeORM migrations are included and run on container startup.

➤ The service uses Docker Compose for easy local environment setup.

➤ API runs on port 3000 mapped to container's 3000.

➤ PostgreSQL runs on default port 5432 within Docker.