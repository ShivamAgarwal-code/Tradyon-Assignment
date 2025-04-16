# Documentation for Product Catalog App Codebase

## Overview

This codebase represents a application for a product catalog, designed to display various product categories and their details. The app features a left sidebar for navigation and a main content area to display product information. It was converted from a Next.js web application, with Tailwind CSS styles translated into React Native `StyleSheet` styles. The app supports a variety of product categories such as "Dry Spices," "Seeds," "Herbs," and more, with detailed views for each category.

## File Structure

- **`ProductsPage.js`**: The main entry point for the app, managing the state for the active product category and rendering the `Layout` component with product details as its `children`.
- **`Layout.js`**: A layout component that renders a left sidebar for category navigation and a main content area for displaying the `children` (product details).
- **`SidebarItem.js`**: A reusable component for rendering individual sidebar items, including an image, title, and click handler for category selection.
- **`TabView.js`**: A component for rendering tabbed navigation (e.g., for subcategories or additional views within a product category).
- **`TabHeader.js`**: A subcomponent of `TabView`, rendering individual tab headers with active/inactive states.

## Key Components

### 1. ProductsPage

- **Purpose**: The main page component that manages the state of the active product category and renders the appropriate content.
- **Props**:
  - None (standalone component).
- **State**:
  - `activeItem`: Tracks the currently selected product category (e.g., `"dryspices"`).
- **Features**:
  - Renders a `Layout` component with a predefined `sidebarItems` array.
  - Conditionally renders product details based on `activeItem`.
  - Displays product details for categories like "Dry Spices" (with images and metadata) and others (with text and grid layouts).
- **Dependencies**:
  - `Layout` component.
  - Assets (e.g., `../assets/blackpepper.png`, `../assets/dryspices.png`).
- **Styling**:
  - Uses `StyleSheet` to mimic Tailwind CSS styles (e.g., `gap`, `padding`, `borderRadius`).
  - Ensures content fills the available space (`width: "100%"`).

### 2. Layout

- **Purpose**: Provides the app’s layout structure with a left sidebar and main content area.
- **Props**:
  - `sidebarItems`: Array of category objects (`id`, `image`, `title`).
  - `children`: The main content (product details from `ProductsPage`).
  - `setActiveItem`: Function to update the active category.
  - `activeItem`: The currently selected category ID.
- **Features**:
  - Renders a left sidebar using `sidebarItems` and `SidebarItem` components.
  - Displays `children` in a scrollable main content area.
  - Includes a fallback message if `children` is not provided.
- **Dependencies**:
  - `SidebarItem` component.
- **Styling**:
  - Uses `flexDirection: "row"` for a side-by-side layout.
  - Left sidebar takes 25% width, main content takes the remaining space (`flex: 1`).

### 3. SidebarItem

- **Purpose**: Renders individual sidebar items for product categories.
- **Props**:
  - `image`: The category image (e.g., `require("../assets/dryspices.png")`).
  - `title`: The category name (e.g., "Dry Spices").
  - `isActive`: Boolean indicating if the category is selected.
  - `onClick`: Function to handle category selection.
- **Features**:
  - Displays an image and title in a clickable container (`TouchableOpacity`).
  - Applies active state styling (e.g., bold text) when `isActive` is true.
- **Styling**:
  - Centers content (`alignItems: "center"`).
  - Includes padding and image sizing.

### 4. TabView

- **Purpose**: Renders a tabbed navigation interface for subcategories or additional views.
- **Props**:
  - `tabs`: Array of tab objects (`id`, `title`, `content`).
- **State**:
  - `activeTab`: Tracks the currently selected tab.
- **Features**:
  - Renders a horizontal scrollable list of `TabHeader` components.
  - Displays the content of the active tab.
- **Dependencies**:
  - `TabHeader` component.
- **Styling**:
  - Horizontal `ScrollView` with hidden scrollbar.
  - Separator line below tabs.

### 5. TabHeader

- **Purpose**: Renders individual tab headers within `TabView`.
- **Props**:
  - `title`: The tab title.
  - `isActive`: Boolean indicating if the tab is selected.
  - `onClick`: Function to handle tab selection.
- **Features**:
  - Displays the tab title in a clickable container (`TouchableOpacity`).
  - Shows an active indicator (underline) when `isActive` is true.
- **Styling**:
  - Active/inactive text styling (e.g., color, font weight).
  - Active indicator styled as a green underline.

## Assets

- **Images**:
  - Located in `../assets/` (e.g., `blackpepper.png`, `dryspices.png`).
  - Used in `SidebarItem` and `ProductsPage` for category and product visuals.
  - SVGs from the web version (e.g., `blackpepper.svg`) are assumed to be converted to PNGs, as React Native doesn’t natively support SVGs without additional libraries like `react-native-svg`.

## How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Install Dependencies**:

```bash
 npm start
```
