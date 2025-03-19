# 🎮 Movie Recommendation App

A feature-rich movie recommendation app built with **React, Redux, Firebase, Tailwind CSS, and Google Gemini API**. Users can explore trending movies, watch trailers, and receive AI-generated movie suggestions.

---

## 🚀 Features

### 🏢 **Core Development**

- ✅ **React App Setup** - Created with Create React App
- ✅ **Tailwind CSS** - Styled using Tailwind for a sleek UI
- ✅ **Routing** - Implemented seamless navigation

### 🔒 **Authentication**

- ✅ **Login & Signup Forms** - With form validation using `useRef`
- ✅ **Firebase Setup** - Integrated Firebase authentication
- ✅ **User Account Management** - Signup, Sign-in, Profile Update, and Sign-out
- ✅ **Protected Routes** - Redirect users based on authentication status

### 🎥 **Movie Data & API Integration**

- ✅ **TMDB API** - Fetched now-playing and popular movies
- ✅ **Redux Store** - Centralized state management with `movieSlice`
- ✅ **Trailer Video Fetching** - Embedded YouTube trailers with autoplay & mute

### 🌮 **Movie Discovery & AI Search**

- ✅ **Custom Hooks** - For fetching Now Playing & Popular Movies
- ✅ **Google Gemini AI** - Implemented AI-powered movie search
- ✅ **Movie Suggestions** - AI-generated recommendations displayed beautifully

### 🌍 **Enhancements & Optimizations**

- ✅ **Multi-language Support** - Added multiple languages
- ✅ **Performance Boost** - Memoized components for efficiency
- ✅ **Responsive UI** - Fully mobile-friendly with Tailwind
- ✅ **Environment Variables** - Secured API keys using `.env`

---

## 🔧 Installation & Setup

1. Clone the repository

```sh
git clone https://github.com/your-repo/movie-recommendation-app.git
cd movie-recommendation-app
```

2. Install dependencies

```sh
npm install
```

3. Set up Firebase & TMDB API keys in `.env`

```sh
REACT_APP_FIREBASE_API_KEY=your_firebase_key
REACT_APP_GEMINI_API_KEY=your_gemini_key
REACT_APP_TMDB_API_KEY=your_tmdb_key
```

4. Run the app

```sh
npm start
```

---

## 📱 Deployment

The app is deployed to **Firebase Hosting**. To deploy:

```sh
npm run build
firebase deploy
```

---

## 🎯 Upcoming Features

- ✅ Advanced Filtering & Sorting
- ✅ User Watchlist & Favorites
- ✅ Dark Mode

Feel free to contribute & enhance the project! 🚀
