# Freelance Time Tracking Tool

### This is the backend piece of:

https://github.com/petrussola/freelance-tracking-tool-test

### Built with:

- Node.js / Express
- SQLite (local dev)
- PostgreSQL (production)

### Scripts:

- `npm install` - installs dependencies
- `npx knex migrate:latest` - runs database migrations, needed first time you use it this repo. Will create a .db3 file that you can examine in any sqlite client
- `npm run server` - runs server in local development in `localhost:8080`
- `npm run start` - runs server for production environment
