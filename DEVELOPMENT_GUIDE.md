# Afrivon Ecosystem Development Guide

This guide provides detailed instructions for setting up and developing the Afrivon Tech Ecosystem in VS Code.

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the repository
git clone https://github.com/davisonmunemo6-jpg/Afrivon-Tech-Ecosystem.git
cd Afrivon-Tech-Ecosystem

# Install dependencies (optional - each app manages its own)
pnpm install
```

### 2. Open in VS Code

```bash
# Open the entire monorepo in VS Code
code .
```

### 3. Start Development Servers

Open three terminals in VS Code:

**Terminal 1 - Afrivon Connect:**
```bash
cd apps/connect/afrivon-connect
npm install --legacy-peer-deps
npm run dev -- --host
```

**Terminal 2 - Afrivon HQ:**
```bash
cd apps/hq-web/afrivon-hq
npm install --legacy-peer-deps
npm run dev -- --host --port 5174
```

**Terminal 3 - Afrivon CareerKit:**
```bash
cd apps/career-kit/afrivon-careerkit
npm install --legacy-peer-deps
npm run dev -- --host --port 5175
```

### 4. Access Applications

- **Afrivon Connect**: http://localhost:5173
- **Afrivon HQ**: http://localhost:5174
- **Afrivon CareerKit**: http://localhost:5175

## 🛠️ VS Code Configuration

### Recommended Extensions

Install these extensions for optimal development experience:

1. **ES7+ React/Redux/React-Native snippets** - React code snippets
2. **Tailwind CSS IntelliSense** - Tailwind class autocomplete
3. **Prettier - Code formatter** - Automatic code formatting
4. **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
5. **Bracket Pair Colorizer** - Color matching brackets
6. **GitLens** - Enhanced Git capabilities
7. **Thunder Client** - API testing (for future backend development)

### Workspace Settings

Create `.vscode/settings.json` in the root directory:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  },
  "tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)",
    "tw=\"([^\"]*)",
    "tw={\"([^\"}]*)",
    "tw\\.\\w+`([^`]*)",
    "tw\\(.*?\\)`([^`]*)"
  ],
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

### Launch Configuration

Create `.vscode/launch.json` for debugging:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome - Afrivon Connect",
      "request": "launch",
      "type": "chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/apps/connect/afrivon-connect/src"
    },
    {
      "name": "Launch Chrome - Afrivon HQ",
      "request": "launch",
      "type": "chrome",
      "url": "http://localhost:5174",
      "webRoot": "${workspaceFolder}/apps/hq-web/afrivon-hq/src"
    },
    {
      "name": "Launch Chrome - Afrivon CareerKit",
      "request": "launch",
      "type": "chrome",
      "url": "http://localhost:5175",
      "webRoot": "${workspaceFolder}/apps/career-kit/afrivon-careerkit/src"
    }
  ]
}
```

## 📁 Project Structure Navigation

### Key Directories

```
afrivon-ecosystem/
├── apps/
│   ├── connect/afrivon-connect/     # Professional networking app
│   │   ├── src/
│   │   │   ├── components/          # React components
│   │   │   ├── hooks/              # Custom React hooks
│   │   │   ├── lib/                # Utility functions
│   │   │   └── App.jsx             # Main app component
│   │   ├── public/                 # Static assets
│   │   └── package.json            # Dependencies
│   │
│   ├── hq-web/afrivon-hq/          # Admin dashboard
│   │   ├── src/
│   │   │   ├── components/         # React components
│   │   │   ├── hooks/              # Custom React hooks
│   │   │   ├── lib/                # Utility functions
│   │   │   └── App.jsx             # Main app component
│   │   ├── public/                 # Static assets
│   │   └── package.json            # Dependencies
│   │
│   └── career-kit/afrivon-careerkit/ # Professional document creation
│       ├── src/
│       │   ├── components/         # React components
│       │   ├── hooks/              # Custom React hooks
│       │   ├── lib/                # Utility functions
│       │   └── App.jsx             # Main app component
│       ├── public/                 # Static assets
│       └── package.json            # Dependencies
│
├── packages/
│   └── ui/                         # Shared UI components
│       ├── src/components/         # Reusable components
│       └── package.json            # Package configuration
│
└── .context/                       # Development context
    ├── Master-Ecosystem-PRD.md     # Product requirements
    ├── Design-System-Blueprint.md  # Design guidelines
    └── CareerKit-Design-Concept.md # CareerKit specific design
```

## 🎨 Development Workflow

### 1. Component Development

When creating new components:

1. **Location**: Place in `src/components/` of respective app
2. **Naming**: Use PascalCase (e.g., `UserProfile.jsx`)
3. **Structure**: Follow this template:

```jsx
import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import './ComponentName.css'; // If needed

const ComponentName = ({ prop1, prop2 }) => {
  return (
    <div className="component-container">
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

### 2. Styling Guidelines

- **Primary**: Use Tailwind CSS classes
- **Custom styles**: Add to component-specific CSS files
- **Colors**: Use the defined color palette:
  - Primary: `#FFD700` (gold)
  - Secondary: `#007BFF` (blue)
  - Background: `#0F1419` (dark)
  - Cards: `#1E2A3A` (dark blue)

### 3. State Management

- **Local state**: Use `useState` hook
- **Side effects**: Use `useEffect` hook
- **Complex state**: Consider `useReducer`
- **Global state**: Use React Context (future: Redux Toolkit)

### 4. Testing Changes

1. **Save files** - Vite will auto-reload
2. **Check browser** - Verify changes in both apps
3. **Test responsiveness** - Use browser dev tools
4. **Validate functionality** - Test all interactive elements

## 🔧 Common Development Tasks

### Adding New Features

1. **Plan the feature** - Review PRD documents in `.context/`
2. **Create components** - Build reusable components
3. **Implement logic** - Add state management and API calls
4. **Style components** - Apply Tailwind classes and custom CSS
5. **Test thoroughly** - Verify functionality across devices

### Debugging Issues

1. **Browser DevTools** - Use React Developer Tools
2. **Console logs** - Add strategic `console.log()` statements
3. **Network tab** - Monitor API calls (future)
4. **VS Code debugger** - Use launch configurations

### Performance Optimization

1. **Component memoization** - Use `React.memo()` for expensive components
2. **Lazy loading** - Use `React.lazy()` for code splitting
3. **Image optimization** - Compress and optimize images
4. **Bundle analysis** - Use Vite bundle analyzer

## 📦 Package Management

### Installing Dependencies

```bash
# For specific app
cd apps/connect/afrivon-connect
npm install package-name --legacy-peer-deps

# For shared packages
cd packages/ui
npm install package-name
```

### Common Dependencies

Both apps include:
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Pre-built UI components
- **Lucide React** - Icon library
- **Recharts** - Chart library (for future use)

## 🚀 Build and Deployment

### Development Build

```bash
# Build specific app
cd apps/connect/afrivon-connect
npm run build

# Build all (future)
pnpm build
```

### Production Deployment

Currently configured for local development. Future deployment will use:
- **Vercel** - Frontend hosting
- **Supabase** - Backend and database
- **GitHub Actions** - CI/CD pipeline

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**
   - Solution: Change port in dev command (`--port 5175`)

2. **Dependency conflicts**
   - Solution: Use `--legacy-peer-deps` flag

3. **Tailwind classes not working**
   - Solution: Check `tailwind.config.js` configuration

4. **Hot reload not working**
   - Solution: Restart dev server with `--host` flag

5. **Import errors**
   - Solution: Check file paths and extensions

### Getting Help

1. **Check documentation** - Review this guide and README
2. **Browser console** - Look for error messages
3. **VS Code problems panel** - Check for TypeScript/ESLint errors
4. **Git history** - Compare with working versions

## 📚 Learning Resources

### React Development
- [React Documentation](https://react.dev/)
- [React Hooks Guide](https://react.dev/reference/react)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com/)

### Vite
- [Vite Guide](https://vitejs.dev/guide/)
- [Vite Configuration](https://vitejs.dev/config/)

### shadcn/ui
- [Component Library](https://ui.shadcn.com/)
- [Installation Guide](https://ui.shadcn.com/docs/installation)

---

**Happy coding! 🚀**

