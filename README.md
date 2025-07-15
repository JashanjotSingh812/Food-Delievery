
# 🍔 MERN Stack Food Delivery Website

A modern and responsive Food Delivery Web Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This app allows users to browse restaurants and dishes, add items to a cart, place orders, and track delivery. Admins can manage food items and handle customer orders.

---

## 🚀 Features

### 👤 User Features
- User Registration and Login (JWT-based)
- Browse food items by category
- Add/Remove items from cart
- Place orders with delivery address
- Track order status (e.g., Preparing, Out for Delivery)
- Mobile-responsive user interface

### 🛠️ Admin Features
- Admin login
- Add/Edit/Delete food items
- View all customer orders
- Update order status

---

## 🧰 Tech Stack

### Frontend:
- React.js
- Axios
- Context API (for global state)
- Tailwind CSS / CSS Modules
- Cloudinary (for image hosting)

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- Multer (for image upload)
- Cloudinary SDK

---

## 📁 Folder Structure

### `/client/src/`

src/
├── assets/ # Static assets (images, icons)
├── components/ # Reusable components (Navbar, Footer, etc.)
├── context/ # Global state using React Context API
├── pages/ # Main pages (Home, Menu, Cart, Login, Admin)
├── App.jsx # Root app component with routing
├── index.css # Global styles
└── main.jsx # Entry point (ReactDOM.render)

shell
Copy
Edit

### `/server/`

server/
├── controllers/ # Business logic (user, food, order)
├── models/ # Mongoose models (User, Food, Order)
├── routes/ # Express routes
├── middleware/ # Auth & error handlers
├── config/ # MongoDB & Cloudinary configs
└── server.js # Entry point for backend

yaml
Copy
Edit

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
https://github.com/JashanjotSingh812/Food-Delievery
cd mern-food-delivery
2. Setup Backend
bash
Copy
Edit
cd server
npm install
Create .env in /server:
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
Start the backend server:

bash
Copy
Edit
npm run dev
3. Setup Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
Your React frontend will be available at http://localhost:5173 (default for Vite).

🔐 API Endpoints
User Routes
POST /api/user/register – Register user

POST /api/user/login – Login user

Food/Menu Routes
GET /api/foods – Get all food items

POST /api/foods – Add food item (Admin)

PUT /api/foods/:id – Edit food item (Admin)

DELETE /api/foods/:id – Delete food item (Admin)

Cart & Order Routes
POST /api/cart/add – Add to cart

GET /api/cart – Get cart items

POST /api/orders – Place an order

GET /api/orders/:id – View order details

GET /api/user/orders – View all user orders

PUT /api/orders/:id/status – Update order status (Admin)

📸 Screenshots
Add homepage, menu page, cart page, and admin dashboard screenshots here.

🛡️ Security
JWT Authentication with protected routes

Password hashing using bcrypt

Role-based access control (Admin/User)

Input validation

CORS enabled

📌 Future Enhancements
Real-time order tracking (Socket.IO)

Payment gateway integration (Razorpay/Stripe)

Review and rating system

Delivery partner panel

Email/SMS notifications
