# 🎮 Pokémon Gallery Client

React frontend application for the Pokémon Gallery with Redux state management and modern UI components.

## 📦 Tech Stack

- **React 18** - Frontend library
- **Redux** - State management
- **React Router** - Client-side routing
- **CSS Modules** - Component styling
- **Axios** - HTTP client for API calls

## 🚀 Quick Start

### Prerequisites

- Node.js >= 14
- npm >= 6

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:3000`

## ✨ Features

- 🔍 **Search Pokémon** - Find Pokémon by name
- 🏷️ **Filter by Type** - Filter Pokémon by their types
- 📊 **Sort Options** - Sort by name or attack power
- 📄 **Pagination** - Navigate through large Pokémon lists
- 🎨 **Pokémon Details** - Detailed view with stats and information
- ➕ **Create Pokémon** - Add custom Pokémon to the database
- 📱 **Responsive Design** - Works on desktop and mobile

## 🎯 Pages & Components

### Pages
- **Landing Page** - Welcome screen with navigation
- **Home** - Main Pokémon gallery with filters and pagination
- **Search Results** - Search results display
- **Pokémon Detail** - Individual Pokémon information
- **Create Pokémon** - Form to add new Pokémon
- **About** - Project information

### Key Components
- **Navbar** - Navigation component
- **Card** - Pokémon card display
- **Filter** - Search and filter controls
- **Pagination** - Page navigation
- **Search** - Search functionality

## 🗂️ Project Structure

```
client/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── About/
│   │   ├── Card/
│   │   ├── LandingPage/
│   │   ├── Navbar/
│   │   ├── NotFound/
│   │   └── Pagination/
│   ├── containers/     # Page components
│   │   ├── Create/
│   │   ├── Filter/
│   │   ├── Home/
│   │   ├── PkDetail/
│   │   └── Search/
│   ├── actions/        # Redux actions
│   ├── reducer/        # Redux reducers
│   ├── store/          # Redux store configuration
│   ├── assets/         # Images and static files
│   ├── App.js          # Main app component
│   └── index.js        # Entry point
└── package.json        # Dependencies and scripts
```

## 🎨 Styling

The application uses CSS Modules for component-specific styling, ensuring:
- Scoped styles
- No CSS conflicts
- Maintainable code
- Component isolation

## 🔄 State Management

Redux is used for global state management with:
- **Actions** - Define what can happen
- **Reducers** - Specify how state changes
- **Store** - Centralized state container
- **Thunk** - Handle async operations

## 🚀 Available Scripts

- `npm start` - Start development server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App

## 🌐 API Integration

The client communicates with the backend API for:
- Fetching Pokémon data
- Creating new Pokémon
- Updating Pokémon information
- Deleting Pokémon
- Type management