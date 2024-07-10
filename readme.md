# Project Name

Brief description of your project goes here.

## Project Structure

The project is structured as follows:

-   `client/`: Frontend application
-   `server/`: Backend application
-   `docker-compose.yaml`: Docker configuration for the project

### Client

The client-side application is built using [framework/library name, e.g., React, Vue, etc.].

### Server

The server-side application is built using [framework/library name, e.g., Express, NestJS, etc.].

## Getting Started

### Prerequisites

-   Node.js
-   Docker
-   [Any other prerequisites]

### Installation

1. Clone the repository: ` git clone https://github.com/MoRashad/task.git`
2. Install dependencies:
    - `cd client && npm install`
    - `cd server && npm install`
3. Set up environment variables:
    - ##### server
        - DATABASE_URL: `your desired postgres db`
    - #### client
        - VITE_API_BASE_URL: `the server url` ie. `http://localhost:3000`
    - #### docker compose
        - `DB_USER=`
        - `DB_PASSWORD=`
        - `DB_NAME=`

### For development:

1. Start the server:
    - migrate database
      `npx prisma migrarte dev`
    - start server
      `npm run dev`
2. In a new terminal, start the client: `npm run dev`

#### docker compose

    - `docker compose up -d`
