# 📹 BOOM Video App

A simple short-video sharing app built with **React Native (Expo)** for the frontend and **Node.js, Express, MongoDB, and Firebase Storage** for the backend.

---

## Features

- User Authentication (Register/Login with JWT)
- Upload short videos from device
- Feed of uploaded videos (with like count)
- Like button functionality
- Firebase Storage for video hosting
- MongoDB Atlas for storing users and video metadata

---

## 🛠️ Tech Stack

### Backend (Node.js)
- Express.js
- MongoDB Atlas (via Mongoose)
- Firebase Storage SDK
- Multer (for handling uploads)
- JWT (for authentication)

### Frontend (React Native with Expo)
- React Native Navigation
- `react-native-video`
- `expo-document-picker`
- `expo` CLI
- AsyncStorage (or `global.token`) for session storage

---

## Project Structure
boom_video_app/
├── video_app_backend/
│ │ 
│ ├── models/
│ │ ├── userModel.js
│ │ └── VideoModel.js
│ ├── routes/
│ │ ├── userRoutes.js
│ │ └── videoRoutes.js
│ ├── util/
│ │ └── firebase.js
│ └── app.js
│
├── video_app_frontend/
│ ├── App.js
│ ├── components/
│ │ └── VideoItem.js
│ ├── screens/
│ │ ├── LoginScreen.js
│ │ ├── HomeScreen.js
│ │ └── UploadScreen.js
│ ├── assets/
│ └── package.json

