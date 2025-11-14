# AIMO Assignment

This project consists of a React frontend client and a Spring Boot backend server.

## Prerequisites

- Node.js (for the client)
- Java 25 (for the server)
- Maven (for the server)

## Getting Started

### Running the Client (Frontend)

1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The client will start on port **5173** and be available at `http://localhost:5173`

### Running the Server (Backend)

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Package the application:

   ```bash
   mvn package
   ```

3. Start the Spring Boot server:
   ```bash
   mvn spring-boot:run
   ```

The server will start on the default Spring Boot port (usually **8080**).

## Project Structure

```
├── client/          # React frontend application
│   ├── src/
│   ├── public/
│   └── package.json
└── server/          # Spring Boot backend application
    ├── src/
    ├── pom.xml
    └── target/
```

## Development

- Frontend: Built with React, TypeScript, and Vite
- Backend: Built with Spring Boot and Java
- The frontend development server supports hot reloading
- The backend can be restarted by re-running `mvn spring-boot:run`
