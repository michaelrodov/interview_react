# React Debugging Challenge

Welcome! This is a technical interview exercise designed to assess your React debugging skills. The application is a simple React project with an input field and an infinite scroll table, but it contains **4 intentional bugs** that you need to identify and fix.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   npm run server:install
   ```

2. **Start the development server:**
   ```bash
   npm run dev:all
   ```

3. **Open the application in your browser** at the URL shown in the terminal (typically `http://localhost:3000`)

## Your Mission

Find and fix **bugs** in this codebase:

### 1.

There's an issue with filtering users by name

**How to reproduce:**
- Type "yyy" in the input field
- the response will be delayed and eventually the application will crash

**Expected behavior:** The table should be filtered by names that contain input values

---

### 2.
   There are too many requests to the backend which is slow, we need to make teh application more performant.
   Suggest a way to do this.

### 3.
   The application is loading too many records as once, implement a pagination to reduce the amound of records to be displayed at once.

### 4.
After above bugs were fixed:
The application still performs extra re-renders, find the root cause and fix it.

**Expected behavior:** Table rows should only re-render when their data actually changes.

---

### 5. CSS Specificity Bug
**Category:** CSS Cascade & Specificity

**Requirements:**
- Input must have the following styles in **normal state**:
  - `background-color: white`
  - `border: 1px solid lightgrey`

- Input must have the following styles in **focus state**:
  - `background-color: white`
  - `border-color: red`

- **No `!important` flags** should be used for input styling
- DevTools should show only 1-2 CSS rules applying (not 10+)
- Use theme colors where applicable (`${props => props.theme.colors.*}`)

---

### 6. CSS Layout Bug
**Category:** Layout & Overflow

The table has layout issues where content is being clipped instead of displaying properly.

**How to identify:**
- Scroll through the table data
- Look for long email addresses and other content
- Notice if the table extends beyond its container or content is cut off

**Expected behavior:** All table content should be visible, either fitting within the container or with proper scrolling.

---

Good luck! 🚀
