# Project Blueprint: Lotto Number Generator

## Overview

This document outlines the plan for creating a Lotto Number Generator web application. The application will feature a clean, modern interface for generating and displaying random lottery numbers.

## Current Plan: Initial Setup

### 1. Project Goal
Create a web page that generates 6 unique random numbers between 1 and 45 and displays them to the user.

### 2. Style and Design
- **Layout:** A centered, card-like interface.
- **Colors:** A vibrant color palette with gradients and shadows to create a "lifted" look.
- **Typography:** Clear, large fonts for the generated numbers for easy readability.
- **Interactivity:** A button with a clear "Generate" call to action and hover/active states.
- **Visuals:** Use a subtle background texture and modern design aesthetics.

### 3. Features
- **Number Generation:** Generate 6 unique random integers from 1 to 45.
- **Display:** Display the generated numbers in visually distinct elements.
- **Component-Based:** Use a Web Component to encapsulate the lottery number display.

### 4. Implementation Steps
1.  **HTML (`index.html`):**
    *   Set up the basic structure with a title, a container, a heading, a placeholder for the numbers, and a "Generate" button.
2.  **CSS (`style.css`):**
    *   Style the body with a background texture.
    *   Style the main container as a centered card with a shadow.
    *   Style the number display elements.
    *   Style the "Generate" button with interactive effects.
3.  **JavaScript (`main.js`):**
    *   Create a `<lotto-numbers>` Web Component to display the numbers.
    *   Implement the logic to generate 6 unique random numbers.
    *   Add an event listener to the button that, when clicked, generates the numbers and updates the `<lotto-numbers>` component.
