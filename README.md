INVENTORY MANAGEMENT SYSTEM
Complete Technical Documentation
Version: 1.0
===========================================================

1. EXECUTIVE SUMMARY
-----------------------------------------------------------
The Inventory Management System (IMS) is a full-stack web 
application designed to manage products, suppliers, and 
inventory transactions efficiently.

The system follows a REST-based client-server architecture:
- Frontend: React + Vite + Tailwind CSS
- Backend: Spring Boot (Layered Architecture)
- Authentication: JWT-based
- Database: Relational Database (e.g., MySQL/PostgreSQL)

The application supports role-based access control:
- ADMIN: Full access
- STAFF: Read-only access to products, limited operations

-----------------------------------------------------------
2. SYSTEM ARCHITECTURE
-----------------------------------------------------------

ARCHITECTURE STYLE:
- Layered Backend Architecture
- RESTful API Communication
- JWT Authentication
- Modular Frontend Structure

Frontend (React)
    |
    |  HTTPS + JWT
    v
Backend (Spring Boot)
    |
    v
Database

Backend Layers:
- Controller Layer
- Service Layer
- Repository Layer
- Entity Layer
- DTO Layer
- Security Layer
- Configuration Layer

-----------------------------------------------------------
3. TECHNOLOGY STACK
-----------------------------------------------------------

Frontend:
- React (Vite)
- Tailwind CSS
- React Router
- Context API
- Axios (for API calls)

Backend:
- Spring Boot
- Spring Security
- JWT
- JPA / Hibernate
- REST Controllers

Database:
- MySQL / PostgreSQL

-----------------------------------------------------------
4. AUTHENTICATION & AUTHORIZATION
-----------------------------------------------------------

Authentication Method:
- JWT-based Authentication

Flow:
1. User logs in via POST /api/auth/login
2. Backend returns:
   {
     "token": "jwt_token",
     "role": "ADMIN"
   }
3. Frontend stores JWT in localStorage
4. All protected requests include:
   Authorization: Bearer <JWT_TOKEN>

Roles:
- ADMIN
  * Full access to products, suppliers, inventory
- STAFF
  * Read-only product access
  * Can view inventory
  * Cannot manage suppliers

-----------------------------------------------------------
5. MODULE SPECIFICATIONS
-----------------------------------------------------------

5.1 Authentication Module
Base Path: /api/auth
Public Access

Endpoints:
POST /signup
POST /login

Frontend:
- Login Page
- Signup Page
- Protected Routes using role-based guards

-----------------------------------------------------------
5.2 Dashboard Module
Base Path: /api/dashboard
Access: ADMIN, STAFF

Endpoints:
GET /overview
GET /low-stock?threshold=10

Response:
{
  totalProducts,
  totalCategories,
  totalStockQuantity
}

Frontend Displays:
- Total Products
- Total Categories
- Total Stock
- Low Stock Alerts

-----------------------------------------------------------
5.3 Product Management Module
Base Path: /api/products
Access:
ADMIN → Full access
STAFF → Read only

Product Fields:
- id
- name
- sku
- categoryId
- price
- supplierId
- minimumThreshold (for low stock detection)

Endpoints:
GET / (supports search, category, page, size)
GET /{id}
POST /
PUT /{id}
DELETE /{id}

Frontend Responsibilities:
- Product Form includes:
  name, sku, category, price, supplier, minimumThreshold
- Pagination support
- Search & category filter

-----------------------------------------------------------
5.4 Category Module
Base Path: /api/categories
Access: ADMIN

Purpose:
- Manage product categorization
- Used in product creation
- Displayed in dashboard statistics

-----------------------------------------------------------
5.5 Inventory Module
Base Path: /api/inventory
Access: ADMIN, STAFF

IMPORTANT DESIGN RULE:
Product data and Stock data are separated.

Stock can ONLY be modified via Inventory Transactions.

Endpoints:
GET /{productId}/stock
POST /transaction
GET /transactions?productId=&startDate=&endDate=

Transaction Request:
{
  productId,
  type: "IN" | "OUT",
  quantity,
  remarks
}

Low Stock Logic:
IsLowStock = CurrentStock <= Product.minimumThreshold

-----------------------------------------------------------
5.6 Supplier Module
Base Path: /api/suppliers
Access: ADMIN ONLY

Fields:
- name
- contactPerson
- email
- phone
- address

Endpoints:
GET /
GET /{id}
POST /
PUT /{id}

Frontend:
- Supplier UI visible only to ADMIN
- Role-based conditional rendering enforced

-----------------------------------------------------------
6. DATABASE DESIGN (ENTITIES)
-----------------------------------------------------------

User
- id
- username
- email
- password
- role

Product
- id
- name
- sku
- categoryId
- price
- supplierId
- minimumThreshold

Category
- id
- name

Supplier
- id
- name
- contactPerson
- email
- phone
- address

InventoryTransaction
- id
- productId
- type (IN/OUT)
- quantity
- transactionDate
- remarks

-----------------------------------------------------------
7. SECURITY MODEL
-----------------------------------------------------------

- JWT Authentication
- Password encrypted using BCrypt
- Role-based endpoint authorization
- CORS configured
- Stateless session management
- Token validation on every protected request

-----------------------------------------------------------
8. ERROR HANDLING
-----------------------------------------------------------

Standard HTTP Status Codes:
200 – Success
201 – Created
204 – No Content
400 – Bad Request
401 – Unauthorized
403 – Forbidden
404 – Not Found
500 – Internal Server Error

Global exception handling implemented in backend.

-----------------------------------------------------------
9. FRONTEND PROJECT STRUCTURE
-----------------------------------------------------------

inventory-frontend/
│
├── components/
├── pages/
├── context/
├── services/
├── hooks/
├── utils/
├── App.jsx
├── main.jsx

Token Handling:
- Stored in localStorage
- Axios interceptor attaches token automatically

-----------------------------------------------------------
10. DEPLOYMENT ARCHITECTURE
-----------------------------------------------------------

Development:
Frontend → http://localhost:5173
Backend → http://localhost:8080

Production (Example):
Frontend → Deployed on Vercel / Netlify
Backend → Deployed on AWS / Render
Database → Cloud-managed DB

-----------------------------------------------------------
11. FUTURE ENHANCEMENTS
-----------------------------------------------------------

- Email notifications for low stock
- Advanced analytics dashboard
- CSV export of reports
- Audit logs
- Multi-warehouse support
- Barcode integration

-----------------------------------------------------------
12. CONCLUSION
-----------------------------------------------------------

The Inventory Management System provides a secure, scalable,
and modular solution for inventory tracking and supplier
management. The separation of product and inventory logic
ensures clean architecture and maintainability.

===========================================================
