# 📝 MERN Blog Platform

A full-stack blog application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. Users can browse blog posts through a responsive web interface, while the backend provides RESTful APIs connected to MongoDB.

The application is deployed online using **Vercel** for the frontend and **Render** for the backend.

---

## 🚀 Live Demo

### Frontend

https://mern-blog-rho-virid.vercel.app

### Backend API

https://mern-blog-api-9l1p.onrender.com

### Posts API

https://mern-blog-api-9l1p.onrender.com/api/posts

---

## ✨ Features

### Current Features

* 📝 View blog posts
* 📄 Display posts from MongoDB
* 🔗 REST API integration
* 📱 Responsive user interface
* 🎨 Bootstrap styling
* 🧭 React navigation
* 🗄️ MongoDB Atlas database
* ⚡ Express.js REST API
* 🌐 Frontend deployed on Vercel
* ☁️ Backend deployed on Render

### Planned Features

* 🔐 User registration and login
* ➕ Create new posts
* ✏️ Edit posts
* 🗑️ Delete posts
* ❤️ Like posts
* 💬 Comments
* 🔍 Search posts
* 📄 Individual post details page
* 🖼️ Image uploads using Cloudinary
* 👤 User profiles
* 🌙 Dark mode
* 🛡️ Admin dashboard

---

## 🛠️ Technologies Used

### Frontend

* React.js
* React Router
* Bootstrap
* Axios
* Vite
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* CORS
* dotenv

### Deployment

* Vercel — Frontend
* Render — Backend
* MongoDB Atlas — Database

### Development Tools

* Git
* GitHub
* VS Code
* npm

---

## 📂 Project Structure

```text
mern-blog/
│
├── client/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── postController.js
│   │
│   ├── middleware/
│   │   └── ...
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Post.js
│   │   └── Comment.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── commentRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

Move into the project directory:

```bash
cd mern-blog
```

---

# 💻 Frontend Setup

Move into the client directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

---

# 🖥️ Backend Setup

Open another terminal and move into the server directory:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Start the backend:

```bash
npm run dev
```

The backend will normally run at:

```text
http://localhost:5000
```

---

# 🔐 Environment Variables

Create a `.env` file inside the `server` directory.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Important

Do **not** upload your `.env` file to GitHub.

Add it to `.gitignore`:

```text
.env
node_modules/
```

---

# 🗄️ MongoDB Database

This project uses **MongoDB Atlas** as the production database.

The backend connects to MongoDB using Mongoose.

Example connection:

```javascript
mongoose.connect(process.env.MONGO_URI)
```

The database stores information such as:

* Users
* Blog posts
* Comments

---

# 🔌 API Endpoints

## Posts

### Get all posts

```http
GET /api/posts
```

Example:

```text
https://mern-blog-api-9l1p.onrender.com/api/posts
```

### Get a single post

```http
GET /api/posts/:id
```

Example:

```text
GET /api/posts/POST_ID
```

### Create a post

```http
POST /api/posts
```

### Update a post

```http
PUT /api/posts/:id
```

### Delete a post

```http
DELETE /api/posts/:id
```

---

## Authentication

### Register

```http
POST /api/auth/register
```

### Login

```http
POST /api/auth/login
```

Authentication uses:

* JWT
* bcryptjs
* Protected routes

---

## 💬 Comments

Example endpoints:

```http
GET /api/comments/:postId
```

```http
POST /api/comments
```

```http
DELETE /api/comments/:id
```

---

# 🔄 Application Architecture

```text
             USER
               │
               ▼
        ┌──────────────┐
        │ React Client │
        │   + Vite     │
        └──────┬───────┘
               │
               │ HTTP Requests
               ▼
        ┌──────────────┐
        │ Express API  │
        │   + Node.js  │
        └──────┬───────┘
               │
               │ Mongoose
               ▼
        ┌──────────────┐
        │   MongoDB    │
        │    Atlas     │
        └──────────────┘
```

---

# ☁️ Deployment

## Frontend — Vercel

The React frontend is deployed using Vercel.

Production URL:

```text
https://mern-blog-rho-virid.vercel.app
```

---

## Backend — Render

The Node.js/Express backend is deployed using Render.

Production API:

```text
https://mern-blog-api-9l1p.onrender.com
```

---

## Database — MongoDB Atlas

MongoDB Atlas provides the cloud database used by the production backend.

---

# 🧪 Testing

To test the application locally:

### Start backend

```bash
cd server
npm run dev
```

### Start frontend

```bash
cd client
npm run dev
```

Then open:

```text
http://localhost:5173
```

Check the API:

```text
http://localhost:5000/api/posts
```

---

# 🔒 Security

The project uses several security practices:

* Password hashing using bcryptjs
* JWT-based authentication
* Environment variables for secrets
* CORS configuration
* Protected API routes
* `.env` excluded from Git

Never commit secrets such as:

```text
MONGO_URI
JWT_SECRET
API keys
Cloudinary credentials
```

---

# 📈 Future Improvements

The following features can be added to make the application more production-ready:

1. 🔐 Complete authentication system
2. 📝 Create and manage posts
3. ✏️ Edit posts
4. 🗑️ Delete posts
5. ❤️ Like system
6. 💬 Comment system
7. 🔍 Search and filtering
8. 🖼️ Cloudinary image upload
9. 👤 User profile
10. 🛡️ Admin dashboard
11. 🌙 Dark mode
12. 📱 Improved mobile responsiveness
13. 🔔 Notifications
14. 📊 Admin analytics

---

# 🎯 Project Objective

The main objective of this project is to develop a complete full-stack blogging platform using modern web technologies.

The project demonstrates:

* Frontend development with React
* REST API development with Express.js
* Backend development with Node.js
* Database management with MongoDB
* Authentication and authorization
* API communication
* Cloud deployment
* Full-stack application architecture

---

# 👨‍💻 Author

**Mukesh Mandala**

MERN Stack Developer

---

# ⭐ Acknowledgements

This project was developed as a full-stack web development project to demonstrate practical knowledge of the MERN stack and modern web application deployment.

---

## 📜 License

This project is available for educational and personal use.
