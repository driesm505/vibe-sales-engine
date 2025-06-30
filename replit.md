# Vibe Coding Agency Website

## Overview

This is a modern marketing website for Vibe Coding Agency, built as a full-stack application with React frontend and Express backend. The website showcases the agency's AI-powered MVP development services and includes a contact form for lead generation.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: Connect-pg-simple for PostgreSQL session store
- **API Design**: RESTful endpoints with proper error handling

### Development Architecture
- **Monorepo Structure**: Shared schema and types between client/server
- **Hot Reload**: Vite development server with Express integration
- **Type Safety**: Full TypeScript coverage across the stack
- **Code Quality**: Consistent formatting and linting setup

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scroll navigation
- **Hero Section**: Gradient background with call-to-action buttons
- **Services Section**: Cards showcasing different service offerings
- **Testimonials**: Customer reviews with star ratings
- **FAQ Section**: Accordion-style frequently asked questions
- **Contact Form**: Lead capture with form validation
- **Footer**: Company information and links

### Backend Services
- **Contact API**: Handles form submissions with validation
- **Storage Layer**: Abstracted storage interface supporting both memory and database storage
- **Route Registration**: Centralized API route management
- **Error Handling**: Comprehensive error middleware

### Database Schema
- **Users Table**: Basic user authentication structure
- **Contacts Table**: Lead capture and contact form submissions
- **Migrations**: Drizzle migrations for schema management

## Data Flow

1. **User Interaction**: Users navigate the marketing website and fill out contact forms
2. **Form Submission**: Contact form data is validated client-side with Zod schemas
3. **API Request**: Data is sent to Express backend via fetch API
4. **Server Validation**: Backend validates data using shared Zod schemas
5. **Database Storage**: Contact information is stored in PostgreSQL database
6. **Response Handling**: Success/error responses are handled with toast notifications
7. **Admin Access**: Contact submissions can be retrieved via admin endpoints

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI primitive components
- **drizzle-orm**: Type-safe SQL ORM for database operations
- **react-hook-form**: Performant form library with validation
- **zod**: Schema validation for type safety

### Development Dependencies
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production

### UI/Styling Dependencies
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **lucide-react**: Icon library

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Production Serving**: Express serves both API routes and static frontend

### Environment Configuration
- **Development**: Hot reload with Vite dev server integration
- **Production**: Optimized builds with static file serving
- **Database**: Environment-based DATABASE_URL configuration

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon serverless recommended)
- Environment variables for database connection
- Static file serving capability

## Recent Changes
- June 30, 2025: Professional UI refinement and business-focused optimization:
  - **Professional Design Enhancement**: Cleaned up UI to attract IT professionals and business decision-makers
  - **Simplified Branding**: Updated logo and navigation to "VibeCoding" with cleaner, business-focused styling
  - **Reduced Tech Jargon**: Simplified headers and descriptions while maintaining technical credibility
  - **Enterprise Positioning**: Changed "LIVE DEMO" to "ENTERPRISE READY" for better business appeal
  - **Cleaner Navigation**: Removed developer-themed styling (./paths) for standard professional navigation
  - **Refined Typography**: Smaller, cleaner fonts and improved readability throughout all sections
  - **Consistent Visual Hierarchy**: Standardized card designs, spacing, and visual elements
  - **Business-Focused Content**: Enhanced descriptions to appeal to decision-makers and IT managers
  - **Professional Color Palette**: Maintained green accent while using more subtle, business-appropriate styling
  - **Working Multi-Language Support**: Functional Dutch/English switching with real-time content updates

## Changelog
- June 28, 2025: Initial setup and full website development

## User Preferences

Preferred communication style: Simple, everyday language.