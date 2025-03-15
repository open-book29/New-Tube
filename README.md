# Next.js Project with Neon Database, Drizzle ORM, tRPC, and Mux

This is a Next.js project that leverages **Neon Database**, **Drizzle ORM**, **tRPC**, and **Mux** for building a scalable and efficient web application.

## Features

- **Next.js** - React framework for server-side rendering and static site generation.
- **Neon Database** - Serverless Postgres database.
- **Drizzle ORM** - TypeScript ORM for database interactions.
- **tRPC** - End-to-end typesafe APIs.
- **Mux** - Video streaming and management.
- **Clerk Authentication** - User authentication and session management.

## Installation

Clone the repository and install dependencies:

```sh
git clone <repository-url>
cd <project-folder>
npm install
```

## Environment Variables

Create a `.env.local` file in the root directory and configure the following environment variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

DATABASE_URL=<your-database-url>
```

## Running the Project

Start the development server:

```sh
npm run dev
bun run dev
```

The application will be available at `http://localhost:3000`

## Database Migrations

To run database migrations using Drizzle ORM:

```sh
npx drizzle-kit generate:pg
npx drizzle-kit push:pg
```

## API Routes

This project uses tRPC for API routes. All API endpoints are defined in the `server/api` directory.

## Deployment

To deploy the application, use Vercel or any platform that supports Next.js.

```sh
vercel
```

## License

This project is licensed under the MIT License.
