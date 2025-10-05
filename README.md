# AltSchool-assignmen-2

This project is a front-end photo store interface that displays products with filtering, pagination, and a shopping cart.

## Features

### Cart Functionality

- Clicking the cart icon opens the cart tray
- Items can be added to the cart using **ADD TO CART** buttons
- Users can clear the cart
- Cart overlay opens and closes with icons

### Filtering System

Users can filter products by:

- Category (People, Nature, Pets, etc.)
- Premium items (bestsellers)
- Price range

Behavior by device:

- **Desktop:** Filters apply instantly when checkboxes change
- **Mobile/Tablet (≤1239px):**
  - Filters apply only after pressing the **Save** button
  - Clear button resets filters

### Pagination

- Displays 6 items per page
- Pagination buttons generated dynamically
- Prev/Next buttons navigate between pages
- Updates after filtering

### Product Rendering

Each product card displays:

- Image
- Name
- Category
- Price
- “Best Seller” badge (if applicable)

## Main JavaScript Components

### `renderCards(page)`

Renders product cards from `filProducts` based on the current page.

### `pagination()`

Creates dynamic pagination buttons and updates `currentPage`.

### `applyFilters()`

- Collects selected categories and price ranges
- Filters the original `products` list
- Updates `filProducts`
- Re-renders cards and pagination

### `filterListener()`

Handles filter logic:

- Desktop: on change, filters apply immediately
- Mobile: Save and Clear buttons are required to apply/reset filters

### Cart UI Listeners

Handles:

- Opening and closing the cart
- Clearing cart items

## Responsive Behavior

Breakpoint used: **1239px**

| Device Type | Filter Behavior           |
| ----------- | ------------------------- |
| Desktop     | Filters apply immediately |
| Mobile/Tab  | Save & Clear required     |

## Tech Stack

- HTML
- CSS
- JavaScript (vanilla)

## Current Status

- Filtering by category and price ✅
- Pagination works with filtered results ✅
- Mobile vs desktop filter behavior ✅
- Cart add-to-cart logic in progress ⏳
