# 📦 INVENTORY MANAGEMENT SYSTEM – FRONTEND
---
## 📖 Overview
The Inventory Management System is a web-based application designed to manage products, suppliers, and stock efficiently.
This frontend is built using **React + Vite + Tailwind CSS** and provides a responsive user interface for managing inventory operations.
The system is designed to integrate with a backend REST API for full functionality.
---
## 🎯 Objectives
* Manage product inventory efficiently
* Track stock levels and low stock alerts
* Maintain supplier details
* Provide a dashboard for quick insights
* Enable role-based access (Admin / Staff)
---
## 🛠️ Tech Stack
* **Frontend Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **State Management:** Context API
* **Routing:** React Router
* **API Integration:** Axios / Fetch (planned)
---
## ✨ Features
### 🔐 Authentication Module
* User Signup
* User Login
* Role-based access (Admin / Staff)
* Secure authentication handling (frontend level)
---
### 📊 Dashboard Module
* Overview of total products
* Low stock alerts
* Summary statistics
* Responsive UI
---
### 📦 Product Management
* Add product
* Update product
* Delete product
* View product list
* Search and filter functionality
---
### 📉 Inventory Tracking
* Track stock quantity
* Low stock indication
* Transaction history (stock in / stock out)
**Low Stock Logic:**
```js
IsLowStock = CurrentQuantity <= MinimumThreshold
```
---
### 🚚 Supplier Management
* Add supplier
* Update supplier
* View supplier details
---
## 📁 Project Structure
```
inventory-frontend/
│
├── public/
│
├── src/
│   ├── assets/            # Images & icons
│   ├── components/        # Reusable UI components
│   ├── pages/             # Application pages
│   ├── context/           # Global state management
│   ├── services/          # API calls
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Helper functions
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚙️ Installation
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/inventory-frontend.git
cd inventory-frontend
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Run the Application
```bash
npm run dev
```
---
## 🌐 Application URL
```
http://localhost:5173
```
---
## 🎨 Tailwind CSS Setup
Ensure the following is included in `index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
