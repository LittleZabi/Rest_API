# 🌐 Secure REST API with Node.js and TypeScript

Welcome to the **Secure REST API** project! This repository contains a Node.js REST API built with **TypeScript** that ensures high security for user operations such as registration, login, user deletion, updates, and more. 

## 🚀 Features

- **User Registration**: Securely register new users with encrypted passwords.
- **User Login**: Authenticate users and manage sessions with tokens.
- **Update User**: Update user information securely.
- **Delete User**: Safely delete user accounts.
- **Session Management**: Securely manage user sessions with tokens.
- **Comprehensive Security**: Utilizes security middlewares to protect endpoints and data.

## 🛠️ Tech Stack

- **Node.js**: JavaScript runtime.
- **TypeScript**: TypeScript for robust and type-safe code.
- **Express**: Web framework for Node.js.
- **Mongoose**: Elegant MongoDB object modeling for Node.js.
- **Lodash**: Utility library for common JavaScript tasks.
- **crypto.js**: Library for cryptographic functions.
- **Compression**: Middleware to compress response bodies.
- **cookie-parser**: Middleware to parse cookies.

## 🏗️ Project Structure

 ```
/src
/controllers
/middlewares
/models
/routes
/services
/utils
app.ts
```

## 🔒 Security Measures

- **Data Encryption**: Passwords and sensitive data are encrypted using `crypto.js`.
- **Token-Based Authentication**: Secure token management for user sessions.
- **Input Validation**: Comprehensive validation of user inputs.
- **Secure Middlewares**: Middleware functions to ensure secure operations.

## 📦 Installation

### 1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/secure-rest-api.git
   cd secure-rest-api
  ```

### 2 Install dependencies:Install dependencies:
```bash
npm install
```

### 3 Environment Variables:
Create a .env file and add the following variables:
```bash
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
### 4 Run the server:
```bash
npm start
```

## 🧩 API Endpoints
User Registration

- Endpoint: /api/register
- Method: POST
- Description: Register a new user.
- Payload:
  ```json
  {
  "username": "example",
  "email": "example@example.com",
  "password": "password123"
  }
  ```
User Login

- Endpoint: /api/login
- Method: POST
- Description: Log in an existing user.
- Payload:
  ```json
  {
  "email": "example@example.com",
  "password": "password123"
  }
  ```
## 📚 Libraries and Tools
- Express: Fast, unopinionated, minimalist web framework for Node.js.
- Mongoose: Elegant MongoDB object modeling for Node.js.
- Lodash: A modern JavaScript utility library delivering modularity, performance, and extras.
- crypto.js: JavaScript library of crypto standards.
- Compression: Node.js compression middleware.
- cookie-parser: Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

## 🧑‍💻 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
## 🙌 Acknowledgements
Thanks to all the contributors and open-source libraries that made this project possible.

Happy Coding! 🚀

---

Made with ❤️ by [LittleZabi](https://github.com/LittleZabi)
