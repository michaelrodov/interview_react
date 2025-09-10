# Simple React Project

A simple React application built with modern tools and best practices.

## Features

- **React 18** - Latest version of React with modern hooks
- **Styled Components** - CSS-in-JS styling with theme support
- **Vite** - Fast development server and build tool
- **Theme Provider** - Consistent styling across components
- **Responsive Design** - Mobile-friendly layout

## Project Structure

```
simple-react-project/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   ├── theme.js         # Theme configuration
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Technologies Used

- **React** - UI library
- **Styled Components** - CSS-in-JS styling
- **Vite** - Build tool and dev server
- **JavaScript (ES6+)** - Modern JavaScript features

## Theme System

The project uses a centralized theme system with styled-components:

- Colors (primary, secondary, success, etc.)
- Typography (fonts, sizes)
- Spacing (margins, padding)
- Border radius and shadows

All styled components have access to the theme via props:

```jsx
const Button = styled.button`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.md};
`;
```

## Development

The project is set up with:
- Hot module replacement for fast development
- Modern ES6+ syntax support
- Styled components with theme provider
- Responsive design principles

## Browser Support

This project supports all modern browsers that support ES6+ features.