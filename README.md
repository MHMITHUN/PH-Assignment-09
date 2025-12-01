# 📦 Boxify - Premium Subscription Box Service

![Boxify Banner](https://i.postimg.cc/26qzPpW5/Gemini-Generated-Image-d4titzd4titzd4ti.png) 

**Boxify** is a modern, responsive web application designed for a premium subscription box service. Users can explore various curated boxes (Tech, Beauty, Books, Fitness, etc.), view detailed information, and manage their subscriptions through a personalized dashboard. The application features a stunning UI with glassmorphism effects, smooth animations, and a robust authentication system.

## 🚀 Live Demo

[**Live Demo**](https://ph-assignment-9-mahamudul.surge.sh) 
---

## ✨ Key Features

### 🔐 **Authentication & Security**
- **User Registration & Login:** Secure email and password authentication with validation (uppercase, lowercase, length checks).
- **Google Sign-In:** One-click login using Google credentials.
- **Forgot Password:** Functional password reset flow with email redirection.
- **Protected Routes:** Secure access to sensitive pages like Dashboard, Profile, and Service Details.
- **Persistent Session:** User login state persists across page reloads.

### 🎨 **Modern UI/UX Design**
- **Responsive Layout:** Fully responsive design that looks great on mobile, tablet, and desktop.
- **Glassmorphism & Gradients:** Trendy design elements using custom Tailwind CSS configuration.
- **Animations:** Smooth transitions, hover effects, and entrance animations (AOS-style).
- **Interactive Slider:** Dynamic hero slider using **Swiper.js** showcasing featured boxes.
- **Toast Notifications:** Real-time success and error feedback using `react-toastify`.

### 👤 **User Features**
- **My Profile:** View and update user information (Name, Photo URL) with real-time Firebase updates.
- **Dashboard:** Personalized user dashboard displaying subscription stats, next delivery, and loyalty points.
- **Service Details:** Comprehensive view of each subscription box with pricing, frequency, and features.
- **Review System:** Interactive 5-star rating and review submission system.

### 🛠 **Technical Highlights**
- **Dynamic Titles:** Unique page titles for better SEO and UX using `react-helmet-async`.
- **404 Error Page:** Custom designed "Not Found" page with navigation options.
- **Loading States:** Smooth loading indicators during data fetching and authentication checks.

---

## 🛠 Technologies Used

- **Frontend Framework:** [React](https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Authentication:** [Firebase Auth](https://firebase.google.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Slider:** [Swiper](https://swiperjs.com/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **SEO:** [React Helmet Async](https://github.com/staylor/react-helmet-async)

---

## 📦 NPM Packages Used

The project utilizes the following key NPM packages:

1.  `react-router-dom`: For handling client-side routing.
2.  `firebase`: For backend authentication and hosting.
3.  `react-helmet-async`: For managing dynamic document heads (titles).
4.  `react-toastify`: For displaying elegant notifications.
5.  `swiper`: For the touch-enabled hero slider.
6.  `react-icons`: For including popular icons (FontAwesome, Material Design, etc.).
7.  `localforage`, `match-sorter`, `sort-by`: Utility libraries for data handling.

---

## 💻 Installation & Run Locally

Follow these steps to run the project locally on your machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/MHMITHUN/PH-Assignment-09.git
    cd PH-Assignment-09
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and add your Firebase configuration keys:
    ```env
    VITE_apiKey=your_api_key
    VITE_authDomain=your_auth_domain
    VITE_projectId=your_project_id
    VITE_storageBucket=your_storage_bucket
    VITE_messagingSenderId=your_messaging_sender_id
    VITE_appId=your_app_id
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  **Open in Browser:**
    Visit `http://localhost:5173` (or the port shown in your terminal) to view the app.

---

## 📝 Project Structure

```
PH-Assignment-09/
├── public/              # Static assets (services.json, images)
├── src/
│   ├── components/      # Reusable components (Navbar, Footer, Slider, ServiceCard)
│   ├── firebase/        # Firebase configuration
│   ├── layouts/         # Main layout wrapper
│   ├── pages/           # Application pages (Home, Login, Register, Dashboard, etc.)
│   ├── providers/       # Context providers (AuthProvider)
│   ├── routes/          # Router configuration and PrivateRoute
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles and Tailwind imports
├── .env                 # Environment variables (not committed)
├── index.html           # HTML template
├── package.json         # Project dependencies
├── tailwind.config.cjs  # Tailwind CSS configuration
└── vite.config.js       # Vite configuration
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

**Developed with ❤️ by Mahamudul Hasan**
