# Afrivon Tech Ecosystem

A comprehensive monorepo containing the complete Afrivon Tech ecosystem - empowering African tradespeople and professionals through technology.

## 🌟 Overview

The Afrivon Tech Ecosystem is a fully integrated, mobile-first suite of applications designed to provide a "business-in-a-box" solution for African tradespeople and professionals. This monorepo houses all applications and shared components in a unified development environment.

## 🏗️ Architecture

### Monorepo Structure

```
afrivon-ecosystem/
├── apps/                          # Applications
│   ├── website/                   # Main website (Afrivon Tech)
│   ├── career-kit/                # Professional document creation
│   ├── trade-link/                # Job marketplace & mentorship
│   ├── learning-hub/              # E-learning platform
│   ├── work-flow/                 # Project management
│   ├── connect/                   # Professional networking (✅ Built)
│   ├── hq-web/                    # Admin dashboard (✅ Built)
│   └── api/                       # Backend API services
├── packages/                      # Shared packages
│   ├── ui/                        # Shared UI components (✅ Built)
│   ├── db/                        # Database utilities
│   ├── auth/                      # Authentication logic
│   └── utils/                     # General utilities
├── .context/                      # AI development context
│   ├── Master-Ecosystem-PRD.md    # Product requirements
│   ├── Design-System-Blueprint.md # Design system
│   └── Universal-Cursor-Rules.md  # Development rules
└── docs/                          # Documentation
```

### Core Principles

- **Unified Database**: Single Supabase (PostgreSQL) instance
- **Unified Authentication**: Single Afrivon Account for all apps
- **Shared Design System**: Consistent UI/UX across all applications
- **API-Driven**: Central API serving all applications
- **Monorepo Management**: Turborepo with pnpm

## 🚀 Built Applications

### 1. Afrivon Connect (Professional Networking)
**Location**: `apps/connect/afrivon-connect/`

A professional networking and community platform serving as the social "heart" of the ecosystem.

**Key Features**:
- Professional networking with TradePass profiles
- One-to-one and group messaging
- Community channels for trades and topics
- "Help a Mate" forum for professional support
- Event discovery and local chapters
- Gig alerts integration with TradeLink

**Tech Stack**: React, Vite, Tailwind CSS, shadcn/ui, Lucide icons

**Development Server**:
```bash
cd apps/connect/afrivon-connect
npm install --legacy-peer-deps
npm run dev -- --host
# Access at http://localhost:5173
```

### 2. Afrivon HQ (Command Center)
**Location**: `apps/hq-web/afrivon-hq/`

A secure administrative dashboard for managing the entire Afrivon ecosystem.

**Key Features**:
- Unified dashboard with key metrics
- User management and permissions
- Financial oversight and payouts
- Support ticket system
- Partnership portal management
- Content management system

**Tech Stack**: React, Vite, Tailwind CSS, shadcn/ui, Lucide icons

**Development Server**:
```bash
cd apps/hq-web/afrivon-hq
npm install --legacy-peer-deps
npm run dev -- --host --port 5174
# Access at http://localhost:5174
```

### 3. Afrivon CareerKit (Identity Forge) ⭐ NEW
**Location**: `apps/career-kit/afrivon-careerkit/`

The professional document creation platform and primary source of TradePass profile data.

**Key Features**:
- Professional CV/Resume builder with real-time preview
- Multiple African-inspired and professional templates
- Skills management with trade-specific suggestions
- Work experience and education tracking
- AI-powered content suggestions
- Multi-format export (PDF, Word, LinkedIn)
- Profile completion tracking with progress indicators
- Document sharing and collaboration

**Unique Design Elements**:
- African-inspired color scheme (Gold #FFD700, Green #2E8B57, Orange #FF6B35)
- Floating animations and pulse effects
- Custom gradient buttons and cards
- Interactive skill badges
- Real-time document canvas preview

**Tech Stack**: React, Vite, Tailwind CSS, shadcn/ui, Lucide icons

**Development Server**:
```bash
cd apps/career-kit/afrivon-careerkit
npm install --legacy-peer-deps
npm run dev -- --host --port 5175
# Access at http://localhost:5175
```

## 🎨 Design System

The ecosystem follows a unified design system that celebrates African identity while maintaining modern usability standards.

### Color Palette
- **Primary Gold**: #FFD700 (Afrivon brand color, highlights, CTAs)
- **Secondary Green**: #2E8B57 (African heritage, success indicators)
- **Accent Orange**: #FF6B35 (Energy, warmth, call-to-actions)
- **Deep Navy**: #1A1B3A (Professional depth, headers, navigation)
- **Dark Background**: #0F1419 (Modern elegance, main background)
- **Slate Cards**: #1E2A3A (Card backgrounds, panels)
- **Muted Elements**: #2A3441 (Input fields, subtle elements)
- **Text Muted**: #8B949E (Secondary text, descriptions)

### Typography
- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Headings**: Bold weights with gold accents for hierarchy
- **Body Text**: Clean, readable with proper contrast ratios
- **Interactive Elements**: Medium weight for buttons and navigation

### Design Principles
- **African-Inspired**: Subtle patterns and cultural color choices
- **Modern & Clean**: Uncluttered interfaces with clear visual hierarchy
- **Vibrant Accents**: Strategic use of gold, green, and orange
- **Consistent Components**: Reusable UI elements with unified styling
- **Engaging Interactions**: Subtle animations and hover effects
- **Mobile-First**: Responsive design optimized for all devices

### Component Styles
- **Cards**: Dark backgrounds with gold borders, hover animations, backdrop blur
- **Buttons**: Gradient backgrounds with lift effects on hover
- **Badges**: Rounded corners with gradient backgrounds and scaling animations
- **Inputs**: Dark styling with gold focus states
- **Navigation**: Consistent hover states with gold highlights
- **Progress Indicators**: Circular rings with brand colors
- **Card Background**: #1E2A3A (Cards and panels)

### Typography
- **Font Family**: Inter, system fonts
- **Responsive sizing**: From 12px (caption) to 40px (H1)

### Components
- Custom button variants (primary, secondary, outline, ghost)
- Consistent card styling with subtle borders and shadows
- Responsive grid layouts
- Interactive hover states and transitions

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18+)
- pnpm (recommended) or npm
- Git

### Getting Started

1. **Clone the repository**:
```bash
git clone https://github.com/davisonmunemo6-jpg/Afrivon-Tech-Ecosystem.git
cd Afrivon-Tech-Ecosystem
```

2. **Install dependencies**:
```bash
pnpm install
# or
npm install
```

3. **Start development servers**:

For Afrivon Connect:
```bash
cd apps/connect/afrivon-connect
npm install --legacy-peer-deps
npm run dev -- --host
```

For Afrivon HQ:
```bash
cd apps/hq-web/afrivon-hq
npm install --legacy-peer-deps
npm run dev -- --host --port 5174
```

### VS Code Setup

1. Open the entire `Afrivon-Tech-Ecosystem` folder in VS Code
2. Install recommended extensions:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - Prettier - Code formatter
   - Auto Rename Tag

3. The workspace is configured for optimal development with:
   - Consistent formatting
   - IntelliSense for Tailwind classes
   - React component snippets

## 📱 Application Features

### Afrivon Connect Features

#### Professional Networking
- **TradePass Integration**: Rich verified profiles showing skills, portfolio, and reputation
- **Connection System**: LinkedIn-style professional networking
- **Profile Views**: Track who's viewing your profile (Pro feature)

#### Communication Tools
- **Direct Messaging**: One-to-one chat between connections
- **Private Groups**: User-created groups for teams and topics
- **Public Channels**: Official moderated channels (#electrical-trade, #freelancer-lounge, etc.)

#### Community Features
- **News Feed**: Updates from connections (achievements, projects, jobs)
- **Help a Mate**: Forum for posting job problems and getting expert solutions
- **Local Chapters**: Location-based community groups
- **Event Discovery**: Online webinars and local meetups

#### Ecosystem Integration
- **Gig Alerts**: Real-time job notifications from TradeLink
- **Achievement Sharing**: Automatic prompts to share Learning Hub certificates
- **Cross-promotion**: Contextual suggestions for other ecosystem apps

### Afrivon HQ Features

#### Dashboard & Analytics
- **Unified Metrics**: Total users, revenue, active jobs, support tickets
- **Real-time Activity**: Live feed of user registrations, partnerships, tickets
- **System Status**: Database, API, and payment gateway monitoring

#### User Management
- **360-Degree View**: Complete user profiles across all apps
- **Account Actions**: Suspend, ban, reset passwords
- **Export Tools**: User data export and filtering

#### Financial Management
- **Revenue Tracking**: Subscriptions, commissions, partnerships
- **Payout Processing**: Mentor payments and partner commissions
- **Financial Reports**: Comprehensive revenue analytics

#### Support System
- **Ticket Management**: Centralized support across all apps
- **Priority Handling**: High, medium, low priority tickets
- **Resolution Tracking**: Open, in-progress, closed status

#### Partnership Portal
- **Self-serve Onboarding**: Automated partner registration
- **Tier Management**: Basic, Standard, Premium partnership levels
- **Asset Upload**: Automated brand asset and product management
- **Analytics**: Partner performance and revenue tracking

## 🔧 Technical Implementation

### Shared UI Components

The `packages/ui` directory contains reusable components:

- **Button**: Multiple variants with consistent styling
- **Card**: Standardized card layout with header, content, title, description
- **Logo**: Responsive logo component with size variants

### Styling Approach

- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS Variables**: Consistent color system
- **Responsive Design**: Mobile-first approach
- **Dark Theme**: Optimized for professional use

### State Management

- **React Hooks**: useState, useEffect for local state
- **Context API**: For shared state across components
- **Future**: Redux Toolkit for complex state management

## 🚀 Deployment

### Development
Both applications are configured for local development with hot reload:
- Afrivon Connect: `http://localhost:5173`
- Afrivon HQ: `http://localhost:5174`

### Production (Future)
- **Frontend**: Vercel deployment for each app
- **Backend**: Supabase for database and authentication
- **CDN**: Asset optimization and global distribution

## 🤝 Contributing

### Development Workflow

1. Create feature branch from `main`
2. Develop in respective app directory
3. Test locally with development servers
4. Commit with descriptive messages
5. Push and create pull request

### Code Standards

- **React**: Functional components with hooks
- **TypeScript**: Gradual adoption for type safety
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting

## 📋 Roadmap

### Phase 1: Foundation (✅ Complete)
- [x] Monorepo setup with Turborepo
- [x] Design system implementation
- [x] Afrivon Connect development
- [x] Afrivon HQ development
- [x] Shared UI components

### Phase 2: Core Applications (Planned)
- [ ] Afrivon Website (landing page)
- [ ] CareerKit (document creation)
- [ ] TradeLink (job marketplace)
- [ ] Learning Hub (e-learning)
- [ ] WorkFlow (project management)

### Phase 3: Integration (Planned)
- [ ] Unified authentication system
- [ ] Cross-app data sharing
- [ ] Universal search functionality
- [ ] Integrated calendar system

### Phase 4: Advanced Features (Planned)
- [ ] Real-time notifications
- [ ] Mobile applications
- [ ] Advanced analytics
- [ ] AI-powered recommendations

## 📞 Support

For development questions or issues:
1. Check existing documentation
2. Review component implementations
3. Test with provided development servers
4. Create detailed issue reports

## 📄 License

This project is proprietary software developed for Afrivon Tech. All rights reserved.

---

**Built with ❤️ for African tradespeople and professionals**
