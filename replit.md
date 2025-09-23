# GoSecure - Smart Tourist Safety Monitoring System

## Overview
GoSecure is a revolutionary AI-driven travel security platform that provides comprehensive tourist safety monitoring through blockchain security, geo-fencing, real-time monitoring, and emergency response systems.

## Project Architecture
- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: Shadcn/UI with Radix UI components and Tailwind CSS
- **3D Graphics**: React Three Fiber (@react-three/fiber) with Drei
- **Animation**: Framer Motion
- **Backend**: Supabase (hosted database and auth)
- **State Management**: TanStack React Query v5
- **Routing**: React Router DOM v6

## Key Features
- Interactive 3D world visualization
- AI-powered threat detection
- Blockchain-secured digital identity
- Real-time geo-fencing and location tracking
- SOS emergency alert system
- Global chat functionality
- Tourist safety dashboard

## Recent Changes
- September 23, 2025: Successfully imported GitHub project to Replit
- Configured Vite dev server for Replit environment (port 5000, host 0.0.0.0)
- Set up deployment configuration for autoscale deployment
- Verified Supabase integration and environment variables

## Environment Setup
- Development server runs on port 5000
- Supabase integration configured with project ID: uasoigivpahcfpgmskxu
- All environment variables properly configured in .env file

## Project Structure
```
src/
├── components/        # React components
│   ├── 3d/           # Three.js 3D components
│   ├── auth/         # Authentication components
│   └── ui/           # Shadcn UI components
├── pages/            # Page components and routes
├── integrations/     # Supabase integration
├── hooks/            # Custom React hooks
└── lib/              # Utility functions

supabase/             # Supabase configuration and migrations
public/               # Static assets
```

## User Preferences
- Project follows modern React patterns with TypeScript
- Uses functional components with hooks
- Implements responsive design with Tailwind CSS
- Maintains clean component structure with separation of concerns

## Deployment
- Configured for autoscale deployment on Replit
- Build command: `npm run build`  
- Start command: `npm run preview`
- All dependencies properly installed and configured