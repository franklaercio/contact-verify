# Contact Verifier - Final Project

This project is the final assignment for the **Web Development 1** master's course, aiming to build an application to validate contacts (email or phone).

The application uses a **monorepo** structure integrating both frontend and backend and supports local execution or Docker-based deployment.

## Technologies Used

- **Frontend**:

  - [Next.js](https://nextjs.org/)
  - [Tailwind CSS](https://tailwindcss.com/)

- **Backend**:

  - [Kotlin](https://kotlinlang.org/)
  - [Spring WebFlux](https://spring.io/projects/spring-webflux)

- **Database**:

  - [PostgreSQL](https://www.postgresql.org/)

- **Other Tools**:
  - [Docker](https://www.docker.com/)
  - [Docker Compose](https://docs.docker.com/compose/)
  - [Node.js](https://nodejs.org/) (v18+)
  - [pnpm](https://pnpm.io/)
  - [Gradle](https://gradle.org/) (v8.11)

## Prerequisites

Before starting, make sure you have the following tools installed:

### Frontend

- **Node.js**: version 18 or higher
- **pnpm**: package manager for Node.js

### Backend

- **Java**: version 21 or higher
- **Gradle**: version 8.11 or higher

## Project Structure

```plaintext
monorepo/
├── frontend/    # Frontend code using Next.js
├── backend/     # Backend code using Kotlin + Spring WebFlux
└── docker/      # Docker and Docker Compose configurations
```

## How to Run

### 1. Run Locally

#### Step 1: Install Dependencies

In the root directory of the project, run:

```bash
pnpm install
```

#### Step 2: Start the Project

To start both frontend and backend simultaneously, run:

```bash
pnpm start
```

The application will be available at:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:8080](http://localhost:8080)

### 2. Run with Docker Compose

#### Step 1: Build Docker Images

In the root directory, run:

```bash
docker-compose up -d
```

The application will be available at the same URLs:

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:8080](http://localhost:8080)

#### Stop Containers

To stop and remove the containers, run:

```bash
docker-compose down
```

## Useful Scripts

- **Install Dependencies**: `pnpm install`
- **Run Locally**: `pnpm start`
- **Test Frontend**: `pnpm test`
- **Test Backend**: `./gradlew test` (run in the `backend` directory)

## Contribution

Feel free to open issues or pull requests for improvements.

## Author

This project was developed as part of the **Web Development 1** master's course with Frank and Rickson.
