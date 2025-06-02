# BlueSkyService

A modern web service project built with TypeScript, React, and Node.js, featuring a clean architecture and responsive design.

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Vite (for development and building)

### Backend
- Node.js with Express
- TypeScript
- PostgreSQL with Drizzle ORM
- CORS enabled

## Project Structure

```
├── client/          # Frontend React application
│   ├── src/
│   │   ├── App.tsx
│   │   ├── components/
│   │   └── pages/
├── server/          # Backend Express server
│   ├── index.ts
│   ├── routes.ts
│   └── db.ts
└── shared/          # Shared types and utilities
    └── schema.ts
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/satyajit1688/BlueSkyService.git
cd BlueSkyService
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Development

- Frontend runs on: `http://localhost:5173`
- Backend API runs on: `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Features

- Modern React with TypeScript
- Responsive UI with Tailwind CSS
- RESTful API with Express
- PostgreSQL database integration
- Type-safe development environment

## Contributing

1. Create a feature branch from `dev`
2. Make your changes
3. Submit a pull request

## License

MIT

A web service project built with TypeScript, React, and Node.js.

## Project Structure

- `client/`: Frontend React application
- `server/`: Backend Node.js server
- `shared/`: Shared types and utilities

## Development

```bash
npm install
npm run dev
```