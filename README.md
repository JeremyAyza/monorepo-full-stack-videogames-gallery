# Pokémon Gallery Monorepo

A fullstack Pokémon management application demonstrating modern web development practices.

## 🎯 Project Overview

This monorepo contains a complete fullstack application for managing Pokémon data with the following features:

- **Frontend**: React application with Redux state management
- **Backend**: Node.js REST API with Express and PostgreSQL
- **Database**: PostgreSQL with Sequelize ORM
- **External API**: Integration with PokéAPI

## 🏗️ Architecture

```
pokemon-gallery-monorepo/
├── api/          # Backend Node.js application
├── client/       # Frontend React application
├── package.json  # Root workspace configuration
└── README.md     # This file
```

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd pokemon-gallery-monorepo
   npm run install:all
   ```

2. **Configure Environment**
   ```bash
   cp api/env.example api/.env
   # Edit api/.env with your database credentials
   ```

3. **Start Development**
   ```bash
   npm run dev
   ```

## 📋 Prerequisites

- Node.js >= 14
- PostgreSQL >= 12
- npm >= 6

## 🔧 Available Scripts

- `npm run dev` - Start both frontend and backend
- `npm run dev:api` - Start only backend
- `npm run dev:client` - Start only frontend
- `npm run build` - Build frontend for production
- `npm test` - Run all tests
- `npm run install:all` - Install all dependencies

## 📚 Documentation

- [API Documentation](./api/README.md)
- [Client Documentation](./client/README.md)

## 🛠️ Tech Stack

### Frontend
- React 18
- Redux + Redux Thunk
- React Router
- CSS Modules
- Axios

### Backend
- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL
- JWT (if implemented)

## 🎨 Features

- 🔍 Search and filter Pokémon
- ➕ Create custom Pokémon
- 📊 View detailed stats
- 📱 Responsive design
- 🌐 External API integration

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details.