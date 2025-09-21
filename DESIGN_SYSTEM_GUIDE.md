# Afrivon Ecosystem Design System Guide

## Overview

The Afrivon Ecosystem Design System is a comprehensive set of design principles, components, and guidelines that ensure consistency across all applications while celebrating African identity and maintaining modern usability standards.

## Brand Identity

**Mission**: Empowering African tradespeople and professionals through technology
**Vision**: A unified, culturally-inspired design language that bridges tradition with innovation
**Values**: Authenticity, Excellence, Community, Innovation

## Color System

### Primary Colors

#### Afrivon Gold (#FFD700)
- **Usage**: Primary brand color, CTAs, highlights, active states
- **Meaning**: Excellence, prosperity, African heritage
- **Accessibility**: Ensure proper contrast when used on dark backgrounds

#### Secondary Green (#2E8B57)
- **Usage**: Success indicators, secondary actions, African heritage elements
- **Meaning**: Growth, nature, African landscape
- **Accessibility**: WCAG AA compliant on white and dark backgrounds

#### Accent Orange (#FF6B35)
- **Usage**: Energy, warmth, call-to-actions, warnings
- **Meaning**: Energy, creativity, African sunset
- **Accessibility**: Use sparingly, ensure proper contrast

### Neutral Colors

#### Deep Navy (#1A1B3A)
- **Usage**: Headers, navigation, professional depth
- **Meaning**: Trust, professionalism, stability

#### Dark Background (#0F1419)
- **Usage**: Main application background
- **Meaning**: Modern elegance, focus

#### Slate Cards (#1E2A3A)
- **Usage**: Card backgrounds, panels, elevated surfaces
- **Meaning**: Subtle elevation, content separation

#### Muted Elements (#2A3441)
- **Usage**: Input fields, subtle UI elements
- **Meaning**: Understated functionality

#### Text Muted (#8B949E)
- **Usage**: Secondary text, descriptions, placeholders
- **Meaning**: Supporting information

## Typography

### Font Stack
```css
font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Type Scale
- **Display**: 3rem (48px) - Hero headings
- **H1**: 2.5rem (40px) - Page titles
- **H2**: 2rem (32px) - Section headings
- **H3**: 1.5rem (24px) - Subsection headings
- **Body Large**: 1.125rem (18px) - Important body text
- **Body**: 1rem (16px) - Default body text
- **Small**: 0.875rem (14px) - Captions, labels
- **Caption**: 0.75rem (12px) - Fine print

### Font Weights
- **Light**: 300 - Subtle text
- **Regular**: 400 - Body text
- **Medium**: 500 - Navigation, buttons
- **Semibold**: 600 - Headings, emphasis
- **Bold**: 700 - Strong emphasis

## Component Library

### Buttons

#### Primary Button
```css
.afrivon-button-primary {
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: #1A1B3A;
  border-radius: 12px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
}

.afrivon-button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
}
```

#### Secondary Button
```css
.afrivon-button-secondary {
  background: linear-gradient(135deg, #2E8B57 0%, #228B22 100%);
  color: #FFFFFF;
  border-radius: 12px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(46, 139, 87, 0.3);
}
```

#### Outline Button
```css
.afrivon-button-outline {
  background: transparent;
  color: #FFD700;
  border: 2px solid #FFD700;
  border-radius: 12px;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: all 0.3s ease;
}

.afrivon-button-outline:hover {
  background: #FFD700;
  color: #1A1B3A;
  transform: translateY(-2px);
}
```

### Cards

#### Standard Card
```css
.afrivon-card {
  background: #1E2A3A;
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.afrivon-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(255, 215, 0, 0.2);
  border-color: #FFD700;
}
```

#### Metric Card (HQ Specific)
```css
.hq-metric-card {
  background: #1E2A3A;
  border: 1px solid rgba(255, 215, 0, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.hq-metric-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #FFD700 0%, #2E8B57 50%, #FF6B35 100%);
}
```

### Badges

#### Skill Badge (CareerKit Specific)
```css
.skill-badge {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(46, 139, 87, 0.2) 100%);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.skill-badge:hover {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.3) 0%, rgba(46, 139, 87, 0.3) 100%);
  transform: scale(1.05);
}
```

### Form Elements

#### Input Fields
```css
.afrivon-input {
  background: #2A3441;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #FFFFFF;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
}

.afrivon-input:focus {
  border-color: #FFD700;
  box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.2);
  outline: none;
}
```

### Navigation

#### Navigation Links
```css
.afrivon-nav-link {
  color: #8B949E;
  transition: all 0.3s ease;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-weight: 500;
}

.afrivon-nav-link:hover {
  color: #FFD700;
  background: rgba(255, 215, 0, 0.1);
}

.afrivon-nav-link.active {
  color: #FFD700;
  background: rgba(255, 215, 0, 0.2);
}
```

### Progress Indicators

#### Progress Ring
```css
.afrivon-progress-ring {
  transform: rotate(-90deg);
}

.afrivon-progress-ring-circle {
  stroke: #FFD700;
  stroke-dasharray: 251.2;
  stroke-dashoffset: 251.2;
  transition: stroke-dashoffset 0.5s ease-in-out;
}
```

## Animation Guidelines

### Micro-Interactions
- **Duration**: 200-300ms for most interactions
- **Easing**: `ease-in-out` for smooth, natural movement
- **Hover Effects**: Subtle lift (2px translateY) with enhanced shadows
- **Scale Effects**: 1.05 scale for interactive elements

### Floating Animations
```css
.afrivon-floating {
  animation: afrivon-float 6s ease-in-out infinite;
}

@keyframes afrivon-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

### Pulse Effects
```css
.afrivon-pulse-glow {
  animation: afrivon-pulse-glow 2s ease-in-out infinite alternate;
}

@keyframes afrivon-pulse-glow {
  from { box-shadow: 0 0 20px rgba(255, 215, 0, 0.3); }
  to { box-shadow: 0 0 30px rgba(255, 215, 0, 0.6); }
}
```

## Layout Guidelines

### Grid System
- **Container Max Width**: 1200px
- **Breakpoints**:
  - Mobile: 320px - 768px
  - Tablet: 768px - 1024px
  - Desktop: 1024px+

### Spacing Scale
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)

### Border Radius
- **Small**: 8px - Input fields, small buttons
- **Medium**: 12px - Standard buttons, form elements
- **Large**: 16px - Cards, panels
- **Extra Large**: 20px - Skill badges, special elements

## Application-Specific Styles

### AfrivonConnect
- **Focus**: Professional networking and community
- **Unique Elements**: Community badges, connection cards
- **Color Emphasis**: Gold for connections, green for community

### AfrivonHQ
- **Focus**: Administrative control and analytics
- **Unique Elements**: Metric cards with gradient tops, status indicators
- **Color Emphasis**: Gold for primary actions, red for warnings

### CareerKit
- **Focus**: Professional document creation
- **Unique Elements**: African-inspired patterns, floating animations
- **Color Emphasis**: Full gradient spectrum for creative expression

## Accessibility Guidelines

### Color Contrast
- **Text on Dark Background**: Minimum 4.5:1 ratio
- **Interactive Elements**: Minimum 3:1 ratio
- **Focus Indicators**: High contrast, 2px gold outline

### Motion Preferences
- Respect `prefers-reduced-motion` for users with vestibular disorders
- Provide alternative feedback for users who disable animations

### Keyboard Navigation
- Clear focus indicators with gold outline
- Logical tab order throughout applications
- Skip links for main content areas

## Implementation Notes

### CSS Custom Properties
All colors and spacing values are defined as CSS custom properties for easy theming and maintenance.

### Component Naming
- Use application prefixes: `connect-`, `hq-`, `careerkit-`
- Follow BEM methodology for complex components
- Maintain consistency across all applications

### Performance Considerations
- Use `transform` and `opacity` for animations (GPU acceleration)
- Implement `backdrop-filter` with fallbacks
- Optimize gradient usage for performance

## Future Considerations

### Dark/Light Mode
The current system is optimized for dark mode. Light mode variants should maintain the same color relationships with adjusted backgrounds.

### Internationalization
Typography stack supports multiple languages. Consider right-to-left (RTL) layouts for Arabic and Hebrew markets.

### Accessibility Enhancements
Continue to improve color contrast ratios and provide more comprehensive screen reader support.

---

This design system serves as the foundation for all Afrivon applications, ensuring a cohesive, professional, and culturally-inspired user experience across the entire ecosystem.

