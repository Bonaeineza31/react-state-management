# **React State Management (Theme Switcher & Task Manager)**

A React application built with **TypeScript** and **Vite** demonstrating state management using React's **Context API (`useContext`)** for global theme switching and **`useReducer`** for managing complex state in a task manager.

---

## **Features**
- **Global Theme Switcher (`useContext`)**: Switch seamlessly between Light and Dark themes across the application.
- **Task Manager (`useReducer`)**: Add and remove tasks with predictable state transitions powered by a React reducer.
- **Custom Theme Palette**: Beautifully styled UI supporting custom Light & Dark mode colors.

---


## **Installation & Running Locally**

### **Prerequisites**
- Node.js (v18 or higher recommended)
- `npm` (comes with Node.js)

## **Setup Steps**
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Bonaeineza31/react-state-management.git 
   cd react-state-management
   ```
   
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open in Browser:**  
   Navigate to `http://localhost:5173/` in your web browser.
5. **Build for production:**
   ```bash
   npm run build
   ```

---

##  **Project Structure**
```
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
```
---

**Assignment Instructions**
Full step-by-step activity guidelines can be found in [instructions.md ](.\/instructions.md).
