# Personal Portfolio Website

## Overview

This is a personal portfolio website built with a React frontend and Flask backend architecture. The project uses modern web technologies including React 19, Vite for build tooling, TailwindCSS for styling, and Flask for serving the application. The design emphasizes glassmorphic UI elements with custom gradient effects and a responsive layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React 19 with Vite**: Modern React application using the latest version with Vite as the build tool for fast development and optimized production builds
- **Component-based Structure**: Organized in `/client/src/` with modular component architecture
- **Styling Strategy**: TailwindCSS 4.x for utility-first styling with custom extensions for brand colors and glassmorphic effects
- **Development Tools**: ESLint for code quality, hot module replacement for development experience

### Backend Architecture  
- **Flask Server**: Lightweight Python web server handling both API endpoints and static file serving
- **Hybrid Routing**: Serves React build files while providing API endpoints under `/api/` prefix
- **Static Asset Management**: Handles assets from both public directory and React build output
- **CORS Configuration**: Enabled for seamless frontend-backend communication during development

### Build and Deployment
- **Vite Build Process**: Compiles React application to `/client/dist/` directory
- **Flask Integration**: Backend serves the built React app and handles client-side routing fallbacks
- **Asset Pipeline**: Serves static assets with fallback logic between public assets and build artifacts

### Styling Architecture
- **Design System**: Custom color palette with cyan-to-purple gradient scheme
- **Glassmorphic Design**: Custom CSS classes for glass effects with backdrop blur
- **Responsive Design**: TailwindCSS responsive utilities for mobile-first approach
- **Custom Animations**: Gradient text animations and interactive hover effects

### Development Workflow
- **Client Development**: Vite dev server on port 3000 with HMR
- **Backend Development**: Flask development server with CORS for API testing
- **Code Quality**: ESLint configuration with React-specific rules and hooks linting

## External Dependencies

### Frontend Dependencies
- **React 19.1.1**: Core React library for UI components
- **React DOM 19.1.1**: React rendering for web browsers
- **Vite 7.1.2**: Build tool and development server
- **TailwindCSS 4.1.13**: Utility-first CSS framework with PostCSS integration
- **Autoprefixer**: CSS vendor prefixing for browser compatibility

### Backend Dependencies
- **Flask**: Python web framework for API and static file serving
- **Flask-CORS**: Cross-origin resource sharing for frontend integration
- **Werkzeug**: WSGI utility library for HTTP exception handling

### Development Tools
- **ESLint 9.33.0**: JavaScript/React code linting with custom rules
- **PostCSS**: CSS processing pipeline for TailwindCSS integration
- **Vite Plugins**: React plugin for JSX processing and fast refresh

### Asset Management
- **Static Assets**: Custom favicon and images served from `/public/assets/`
- **Build Assets**: Compiled CSS and JavaScript served from `/client/dist/`
- **Font System**: System font stack with fallbacks for cross-platform compatibility