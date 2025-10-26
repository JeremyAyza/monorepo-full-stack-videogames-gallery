# 🚀 Pokémon Gallery API

Backend REST API for the Pokémon Gallery application built with Node.js, Express, and PostgreSQL.

## 📦 Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Relational database
- **Sequelize** - ORM for database operations
- **JWT** - Authentication (if implemented)
- **Axios** - HTTP client for external APIs
- **Mocha & Chai** - Testing framework

## 🚀 Quick Start

### Prerequisites

- Node.js >= 12.18.3
- PostgreSQL >= 12
- npm >= 6.14.6

### Installation

```bash
# Install dependencies
npm install

# Copy environment variables
cp env.example .env

# Configure your database settings in .env file
# Start PostgreSQL service

# Run the application
npm start
```

The API will be available at `http://localhost:3001`

## 📋 API Endpoints

### Pokémon Routes
- `GET /pokemons` - Get all Pokémon
- `GET /pokemons/:id` - Get Pokémon by ID
- `POST /pokemons` - Create new Pokémon
- `PUT /pokemons/:id` - Update Pokémon
- `DELETE /pokemons/:id` - Delete Pokémon

### Type Routes
- `GET /types` - Get all Pokémon types
- `POST /types` - Create new type

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 🗄️ Database Schema

### Pokémon Model
- `id` (UUID) - Primary key
- `name` (STRING) - Pokémon name (unique)
- `image` (TEXT) - Image URL
- `vida` (INTEGER) - HP stat
- `ataque` (INTEGER) - Attack stat
- `defensa` (INTEGER) - Defense stat
- `velocidad` (INTEGER) - Speed stat
- `altura` (INTEGER) - Height
- `peso` (INTEGER) - Weight

### Type Model
- `id` (UUID) - Primary key
- `name` (STRING) - Type name (unique)

## 🔧 Configuration

The API uses environment variables for configuration. See `env.example` for all available options.

## 📁 Project Structure

```
api/
├── src/
│   ├── controllers/     # Route controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── app.js          # Express app configuration
│   └── db.js           # Database connection
├── tests/              # Test files
├── index.js            # Entry point
└── package.json        # Dependencies and scripts
```
