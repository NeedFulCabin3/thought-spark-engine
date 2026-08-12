# Thought Spark Engine

A small, distraction-free front-end interface built to dish out wisdom with a quick click. It uses vanilla JavaScript to swap quotes asynchronously while handling smooth visual state transitions.

---

## Overview

Sometimes you just need a quick spark of inspiration without pulling down 50 megabytes of node_modules. This component serves as an isolated proof-of-concept for handling UI state changes and DOM updates smoothly using fundamental web technologies. It manages a hardcoded array of quotes, handles element selection, and controls visual timing using standard browser APIs.

---

## How It Works

1. **User Action**: The user clicks the trigger button to request a new quote.
2. **State Transition**: JavaScript instantly applies a `.fade` class to the container, driving opacity to zero via CSS transitions.
3. **Array Sampling**: After a 300ms timeout matching the CSS fade duration, a random index gets selected from the internal array.
4. **DOM Injection**: Text nodes update with the new quote string and author credit.
5. **Render**: The `.fade` class gets removed, triggering a smooth opacity transition back to full visibility.

---

## Key Features

* Asynchronous timing coordination matching JavaScript event execution with CSS transition speeds.
* Clean DOM manipulation updating node content dynamically without full layout re-renders.
* Flexbox alignment ensuring centered layout geometry across screen widths.
* Direct styling rules using system fonts for sharp text rendering.

---

## Tech Stack Breakdown

* **HTML5**: Establishes structural layout tags and standard element IDs (`quote-text`, `quote-author`, `new-quote-btn`).
* **CSS3**: Handles visual layout using standard box models, Flexbox positioning, state classes, and standard opacity transitions.
* **JavaScript (ES6+)**: Executes DOM updates, random index math calculations, and timed event callbacks using standard browser APIs.

---

## Prerequisites & Web-Based Quick Start

You don't need Node.js, terminal commands, or local development environments to run or edit this project. Everything runs inside a web browser.

### Option A: Using GitHub Codespaces
1. Click the green **Code** button at the top right of this repository page.
2. Select the **Codespaces** tab.
3. Click **Create codespace on main**.
4. Once the web-based editor finishes initializing, right-click `index.html` and select **Open with Live Server** (or open it directly in your browser preview).

### Option B: Direct Browser Execution
1. Download the source files as a `.zip` archive directly from GitHub.
2. Unpack the files onto your computer.
3. Double-click `index.html` to open and run the application in any web browser.

---

## Project Structure

```text
thought-spark-engine/
├── .gitignore          # Excludes OS garbage files and editor configs
├── index.html          # Markup structure and layout container
├── script.js           # Quote dataset, array picker, and transition hooks
├── style.css           # Rulesets, layout specs, and fade state hooks
└── README.md           # Repository documentation and instructions
```

## Roadmap

[ ] Add support for fetching quote datasets via third-party REST APIs.

[ ] Add a copy-to-clipboard button for sharing quotes instantly.

[ ] Implement local storage memory to avoid repeating quotes back-to-back.

[ ] Add dark mode theme styling based on system preferences.

```text"Simplicity is prerequisite for reliability." — Edsger W. Dijkstra```
