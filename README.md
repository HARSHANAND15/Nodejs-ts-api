# Node.js TypeScript Authentication API

A simple Express.js authentication API built with TypeScript, MongoDB, and JWT.

## Fixed Issues ✅

1. **Fixed index.ts** - Reordered initialization to declare `app` before using it
2. **Fixed middleware** - Added proper Bearer token parsing
3. **Added profile endpoint** - Protected route to fetch user profile
4. **Added missing dependencies** - `bcrypt` and `jsonwebtoken`
5. **Added input validation** - Email and password validation in controllers
6. **Improved responses** - Better error handling and response messages

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Update `.env` file with your MongoDB URI:
```
MONGO_URI=mongodb://localhost:27017/auth-db
JWT_SECRET=your_super_secret_key_here
PORT=5000
```

For MongoDB Atlas:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
```

### 3. Build TypeScript
```bash
npm run build
```

### 4. Run the Server
```bash
# Production
npm start

# Development (with auto-reload)
npm run dev
```

The server will start on `http://localhost:5000`

## API Endpoints

### 1. Register User
**POST** `/api/auth/register`
```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```
Response:
```json
{
  "message": "User registered successfully",
  "email": "test@gmail.com"
}
```

### 2. Login User
**POST** `/api/auth/login`
```json
{
  "email": "test@gmail.com",
  "password": "123456"
}
```
Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. Get Profile (Protected)
**GET** `/api/auth/profile`
```
Headers:
Authorization: Bearer <your_token_here>
```
Response:
```json
{
  "message": "Profile fetched",
  "user": {
    "_id": "...",
    "email": "test@gmail.com"
  }
}
```

## Testing with cURL

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@gmail.com","password":"123456"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@gmail.com","password":"123456"}'
```

### Get Profile
```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Testing with HTML GUI

Open `test-api.html` in your browser to test the API with a user-friendly interface:
- Register new users
- Login and get tokens
- Fetch protected user profiles
- All responses are displayed in the browser

## Project Structure
```
src/
├── index.ts              # Main server file
├── config/
│   └── db.ts            # MongoDB connection
├── models/
│   └── userModel.ts     # User schema
├── controllers/
│   └── authController.ts # Request handlers
├── services/
│   └── authService.ts   # Business logic
├── routes/
│   └── authRoutes.ts    # Route definitions
└── middleware/
    └── authMiddleware.ts # JWT verification
```

## Technologies Used
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication tokens
- **bcrypt** - Password hashing
- **CORS** - Cross-origin requests
- **Dotenv** - Environment variables
