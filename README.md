# Sleep Tracker

This project is a Sleep Tracker application built with Next.js, Prisma, and ECharts. It allows users to track their sleep duration and visualize the data over the last 7 days.

## Features

- User registration with unique names
- Tracking sleep duration
- Visualizing sleep data with ECharts
- Displaying data for the last 7 days

## Tech Stack

- **Next.js**: React framework for server-side rendering
- **Prisma**: ORM for database management
- **NeonDB**: PostgreSQL as a database
- **ECharts**: Charting library for data visualization
- **Tailwind CSS**: Utility-first CSS framework

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (>= 14.x)
- Yarn
- PostgreSQL database (NeonDB)

## Getting Started

Follow these steps to set up and run the project:

### 1. Clone the Repository

```bash
git clone <repository-url>
cd fullstack-cynomi
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Set Up Environment Variables
```dotenv
DATABASE_URL="postgresql://cynomi_owner:wQzl87WIfBGD@ep-delicate-heart-a2bub9ea-pooler.eu-central-1.aws.neon.tech/cynomi?sslmode=require"
```

### 4. Set Up Prisma

```bash
yarn prisma generate
yarn prisma migrate dev --name init
```

### 5. Run the Development Server
Start the Next.js development server:
```bash
yarn dev
```
Open your browser and navigate to http://localhost:3000 to see the application in action.

### API Endpoints
- **POST `/api/sleep-data`**: Create a new sleep entry for a user.
- **GET `/api/sleep-data`**: Fetch all users with their sleep data.

### Access to the database (if needed)
```dotenv
PGHOST='ep-delicate-heart-a2bub9ea.eu-central-1.aws.neon.tech'
PGDATABASE='cynomi'
PGUSER='cynomi_owner'
PGPASSWORD='wQzl87WIfBGD'
```

## Running PostgreSQL Locally Using Docker (Optional)

To run PostgreSQL locally using Docker, follow these steps:

### 1. Install Docker

Make sure you have Docker installed on your machine. You can download and install Docker from [here](https://www.docker.com/products/docker-desktop).

### 2. Run PostgreSQL Container

Run the following command to start a PostgreSQL container:

```bash
docker run --name postgres -e POSTGRES_PASSWORD=yourpassword -e POSTGRES_USER=yourusername -e POSTGRES_DB=yourdatabase -p 5432:5432 -d postgres
```
Replace yourpassword, yourusername, and yourdatabase with your desired PostgreSQL password, username, and database name.

### 3. Update Environment Variables
Update your .env file with the connection details for your local PostgreSQL instance:
```dotenv
DATABASE_URL="postgresql://yourusername:yourpassword@localhost:5432/yourdatabase"
```

### 4. Apply Prisma Migrations
```bash
yarn prisma generate
yarn prisma migrate dev --name init
```

### 5. Start the Development Server
```bash
yarn dev
```
Open your browser and navigate to http://localhost:3000 to see the application in action.


