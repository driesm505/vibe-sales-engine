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
- July 2, 2025: Enhanced hero section interactions and live demo experience:
  - **"Deel Je Idee" Button Enhancement**: Added sophisticated hover effects with scale transform, green glow shadow, color transitions, and animated chevron icon
  - **Live Video Signal**: Added prominent "LIVE" indicator in top-left corner with pulsing white dot and red background for authentic streaming feel
  - **Demo Video Improvements**: Enhanced video mockup with multiple fallback sources and improved overlay content
  - **Interactive Status Indicators**: Added pulsing and ping animations to deployment status elements for dynamic feel
  - **Enhanced Visual Feedback**: Button hover now includes vibe-green text color transition and 3D scale effect
  - **Consistent Brand Colors**: Updated typing animation and status indicators to use vibe-green throughout
  - **Professional Polish**: Improved button styling with group states and smooth transitions for premium user experience

- July 2, 2025: Enhanced demo and process section styling with additional green accents:
  - **"Bekijk Demo" Button Enhancement**: Updated VideoModal trigger button with vibe-green styling, shadow effects, and improved hover states
  - **"Ons Ontwikkelproces" Section Improvements**: Added extensive vibe-green accents throughout process section
  - **Process Section Headers**: Updated section title and subtitle with vibe-green highlighting for code syntax elements
  - **Step Number Indicators**: All step number badges now use consistent vibe-green background with shadow effects
  - **Timeline Connection**: Updated connection line gradient to use brand color progression (trust-blue → sage-green → vibe-green → conversion-orange)
  - **Clock Icons and Duration**: All timing elements now use vibe-green color for consistency
  - **Detail Bullet Points**: Updated all detail list indicators to use vibe-green dots
  - **Card Hover Effects**: Added vibe-green border and shadow effects on hover for all process cards
  - **Both Process Components**: Updated both process-section.tsx and process-section-new.tsx for consistent styling
  - **Mobile Layout Improvements**: Applied same vibe-green enhancements to mobile responsive layouts

- June 30, 2025: Landing page optimization and UI consistency improvements:
  - **Hero Section Refinement**: Removed "Bekijk Demo" button and updated "Deel je idee" button with professional glass-morphism styling
  - **Interactive Demo Video**: Added auto-playing mockup video in the hero section laptop mockup for engaging user experience
  - **Brand Color Consistency**: Standardized all green colors to use vibe-green (#3CDE82) across navigation, buttons, and accents
  - **Service Cards Enhancement**: Updated all service card buttons to use coordinated brand color palette (vibe-green, trust-blue, sage-green)
  - **Process Section Colors**: Aligned process step colors with brand palette for visual consistency
  - **Pricing Section Redesign**: Updated pricing card gradients to use brand colors (conversion-orange, vibe-green, trust-blue)
  - **Professional Button Styling**: Implemented consistent button styling throughout with proper hover effects and color coordination
  - **Visual Hierarchy Improvement**: Ensured vibe-green appears regularly throughout the website for brand recognition
  - **Code Snippet Styling**: Updated all terminal/code elements to use consistent vibe-green highlighting
  - **Icon Color Coordination**: Applied brand color rotation to feature icons and indicators

## Changelog
- June 28, 2025: Initial setup and full website development

## User Preferences

Preferred communication style: Simple, everyday language.