# Lotto Number Generator - Project Blueprint

## Project Overview
A modern, framework-less web application that generates random lotto numbers (1-45). The app features a clean, responsive design with Web Components and CSS variables for theming.

## Features
- **Lotto Number Generation:** Generates 6 unique random numbers between 1 and 45.
- **Modern UI:** Glassmorphism effect, gradients, and smooth transitions.
- **Web Components:** Encapsulated UI elements for numbers and theme toggling.
- **Theme Support:** Dark mode (default) and Light mode switching.
- **Persistence:** Remembers the user's theme preference using `localStorage`.

## Design Specifications
- **Typography:** System fonts (-apple-system, BlinkMacSystemFont, etc.)
- **Colors (Dark Mode):**
    - Background: Purple/Blue gradient
    - Text: White
    - Container: Semi-transparent white with blur
- **Colors (Light Mode):**
    - Background: Light gray/Blue gradient
    - Text: Dark gray (#333)
    - Container: Semi-transparent white with shadow
- **Interactive Elements:**
    - Generate Button: Vibrant gradient with hover/active states.
    - Lotto Balls: Golden gradient with hover scale effect.
    - Theme Toggle: Circular button with emoji (☀️/🌙).

## Implementation Plan (Theme Support)
1.  **CSS Variables:** Define `--bg-color`, `--text-color`, etc., in `:root` and `[data-theme="light"]`.
2.  **Theme Toggle Component:** Create a `theme-toggle` Web Component that switches the `data-theme` attribute on the `<html>` element.
3.  **Local Storage:** Save and load the `theme` key to persist user preference.
4.  **Layout Update:** Position the theme toggle in the top-right of the container.

## Progress
- [x] Initial project setup (HTML, CSS, JS)
- [x] Lotto number generation logic
- [x] Web Component for numbers
- [x] Pushed to GitHub
- [ ] Add Dark/Light mode support (In progress)
