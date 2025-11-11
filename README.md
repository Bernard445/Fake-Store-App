# 🛍️ Fake Store App

A fully functional **React + Bootstrap e-commerce frontend** that interacts with the [FakeStoreAPI](https://fakestoreapi.com) for testing and development.  
This project demonstrates product listing, detail view, creation, editing, and deletion — built with **React Router**, **Fetch API**, and **React Bootstrap**.

---

## 🚀 Features

### 🏠 Home Page
- Welcoming intro to the store.  
- “View Products” button navigates to the product listing page.  
- Responsive layout using React Bootstrap grid system.

### 🛍 Product Listing Page
- Fetches products from the FakeStoreAPI.  
- Displays each product in a card with:
  - Product image  
  - Title  
  - Price  
  - “View Details” button  
- Handles loading and error states gracefully.  
- Responsive and mobile-friendly design.

### 📄 Product Details Page
- Displays detailed info about a single product:
  - Image, title, description, category, and price  
- Uses `useParams()` to extract product ID from the route.  
- Allows:
  - **Delete Product** (with confirmation modal)
  - Optional Add-to-Cart placeholder (for expansion)  
- Automatically redirects to `/products` after deletion.

### ➕ Add Product Page
- React Bootstrap form to create a new product (`POST` request).  
- Fields:
  - Title
  - Price
  - Description
  - Category
  - Image URL  
- Displays success or error alerts.  
- Redirects to product list after a successful “creation”.

### ✏️ Edit Product Page
- Fetches and pre-fills existing product data.  
- Allows editing and updating via `PUT` request.  
- Shows success message on update and redirects to product list.  
- Fully responsive, clean UI.

### 🗑 Delete Product Functionality
- Confirmation modal before deletion.  
- Sends `DELETE` request to FakeStoreAPI.  
- Redirects to product list afterward.  
> ⚠️ Note: FakeStoreAPI simulates deletions but does not persist changes — this is expected behavior.

### 🧭 Navigation Bar
- Persistent across the entire app.  
- Links:
  - Home (`/`)
  - Products (`/products`)
  - Add Product (`/add-product`)  
- Mobile-responsive with toggleable menu.
