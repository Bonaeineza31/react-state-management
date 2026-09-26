# React State Management (Theme Switcher & Task Manager)

This is a React application built with TypeScript and Vite. It demonstrates state management in React using:
- useContext for global theme switching (Light Mode and Dark Mode).
- useReducer for managing task state in a task manager.

---

## Color Palette

| Theme | Element | Hex Color |
| :--- | :--- | :--- |
| Light Theme | Background | #FFFFFF |
| Light Theme | Text | #000000 |
| Light Theme | Button | #1E90FF |
| Dark Theme | Background | #242629 |
| Dark Theme | Text | #FFFFFF |
| Dark Theme | Button | #85D1B0 |

---

## Features

- **Theme Switcher**: Toggle between Light Theme and Dark Theme across the app.
- **Task Manager**: Add and delete tasks using a React reducer.

---

## How to Install and Run

### Prerequisites
- Node.js installed on your computer.

### Setup Steps

1. **Clone the repository:**
   `ash
   git clone <your-repository-url>
   cd react-state-management
   `

2. **Install dependencies:**
   `ash
   npm install
   `

3. **Start the development server:**
   `ash
   npm run dev
   `

4. **Open in browser:**
   Go to http://localhost:5173/ in your browser.

---

## Project Structure

- src/constants/theme.ts: Theme name constants (LIGHT_THEME and DARK_THEME).
- src/context/ThemeContext.tsx: Context provider and custom hook for theme switching.
- src/components/Navbar.tsx: Navbar component with a button to toggle themes.
- src/reducers/taskReducer.ts: Reducer function for adding and removing tasks.
- src/components/TaskManager.tsx: Task manager component.
- src/App.tsx: Root component wrapping everything in ThemeProvider.
- instructions.md: Detailed activity instructions.
