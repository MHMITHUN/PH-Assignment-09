# Boxify - Subscription Box Service Platform

Boxify is a web application that enables users to browse, subscribe to, and manage monthly subscription boxes based on their preferences.

## Live URL
[Insert Live URL Here]

## Key Features
- **User Authentication**: Email/Password and Google Login using Firebase.
- **Responsive Design**: Fully responsive layout for Mobile, Tablet, and Desktop.
- **Dynamic Content**: Browse various subscription services with detailed information.
- **Protected Routes**: Secure access to Service Details, My Profile, and Dashboard.
- **Review System**: Users can leave ratings and reviews for services.
- **Profile Management**: Users can update their name and profile picture.
- **Dynamic Titles**: Page titles change based on the current route.

## Technologies Used
- **Frontend**: React, Vite
- **Styling**: Tailwind CSS, DaisyUI
- **Routing**: React Router DOM
- **Authentication**: Firebase Auth
- **State Management**: Context API
- **Slider**: Swiper.js
- **Notifications**: React Toastify
- **SEO**: React Helmet Async

## Setup Instructions
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env.local` file in the root directory and add your Firebase configuration:
    ```
    VITE_apiKey=your_api_key
    VITE_authDomain=your_auth_domain
    VITE_projectId=your_project_id
    VITE_storageBucket=your_storage_bucket
    VITE_messagingSenderId=your_messaging_sender_id
    VITE_appId=your_app_id
    ```
4. Run `npm run dev` to start the development server.

## NPM Packages
- `firebase`
- `react-router-dom`
- `tailwindcss`
- `daisyui`
- `swiper`
- `react-toastify`
- `react-helmet-async`
- `react-icons`

## Environment Variables
Secure your Firebase configuration by using environment variables as shown in the Setup Instructions.
