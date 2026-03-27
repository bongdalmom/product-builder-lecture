# Project Blueprint: Lotto & Partnership Portal

## Overview
A modern web application that combines a fun Lotto Number Generator with a professional Partnership Inquiry system. Built using framework-less technologies (HTML, CSS, JS) and following modern "Baseline" web standards.

## Project Structure
- `index.html`: Main entry point.
- `style.css`: Global styles using modern CSS features (OKLCH, CSS Variables, Backdrop Filter).
- `main.js`: Logic for Web Components and interactivity.
- `blueprint.md`: Project documentation and task tracking.

## Features & Design
- **Lotto Generator**: Generates 6 unique numbers (1-45) with a clean, animated UI.
- **Theme Toggle**: Support for Light and Dark modes.
- **Modern Aesthetics**:
    - **Glassmorphism**: Containers use semi-transparent backgrounds with blur effects.
    - **Typography**: Expressive font choices and responsive sizing.
    - **Colors**: Vibrant palettes using `oklch` (planned update).
    - **Web Components**: Reusable, encapsulated UI elements (`<theme-toggle>`, `<lotto-numbers>`, `<partnership-form>`).

## Current Task: Partnership Inquiry Form
**Goal**: Implement a professional contact form for partnership inquiries using Formspree for backend processing.

### Steps:
1.  **Design the Form Component**: Create a `<partnership-form>` Web Component.
2.  **Formspree Integration**: Use the `fetch` API for AJAX submission.
3.  **UI/UX Enhancements**:
    - Use `:has()` selector for input focus effects.
    - Implement success/error states within the component.
    - Apply soft shadows and subtle textures for a "premium" feel.
    - Ensure mobile responsiveness.
4.  **Accessibility**: Proper labels, ARIA roles, and keyboard support.
