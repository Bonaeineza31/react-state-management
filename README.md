# React State Management (Theme Switcher & Task Manager)

A React app built with TypeScript and Vite demonstrating state management using:
- useContext for global theme switching (Light and Dark mode).
- useReducer for task management (add & remove tasks).

---

## How to Run the App

1. Clone this repository:
   `ash
   git clone <your-repository-url>
   cd react-state-management
   `

2. Install project packages:
   `ash
   npm install
   `

3. Start the dev server:
   `ash
   npm run dev
   `
   Open http://localhost:5173 in your browser.

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

## Folder Structure

`
react-state-management/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Top navbar with theme toggle button
│   │   ├── Navbar.module.css   # Navbar styles
│   │   ├── TaskManager.tsx     # Task add/remove component
│   │   └── TaskManager.module.css  # TaskManager styles
│   ├── constants/
│   │   └── theme.ts            # LIGHT_THEME and DARK_THEME constants
│   ├── context/
│   │   └── ThemeContext.tsx    # Theme context, provider, and useTheme hook
│   ├── reducers/
│   │   └── taskReducer.ts      # Reducer for add/remove task actions
│   ├── App.tsx                 # Root component with ThemeProvider
│   ├── App.css                 # Global app layout styles
│   └── main.tsx                # React entry point
├── instructions.md             # Assessment instructions
├── README.md                   # Project documentation
└── package.json
`

---

## Assignment Instructions

Full step-by-step activity instructions are available in [instructions.md](./instructions.md).
