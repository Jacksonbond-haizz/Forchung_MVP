# Forchung MVP - Research Platform

A modern web application built with **React** and **Firebase** for managing and organizing research projects. This MVP demonstrates core functionality for research collaboration, data management, and project tracking.

---

## 📋 Project Overview

Forchung is a research management platform that enables:
- **Project Management** - Create, organize, and track research initiatives
- **Secure Authentication** - User login and account management
- **Real-time Data Storage** - Cloud-based database with Firestore
- **User-friendly Interface** - Intuitive design for seamless navigation
- **Analytics & Tracking** - Monitor project progress and engagement

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React** | Frontend framework |
| **Firebase** | Backend & authentication |
| **Firestore** | Real-time database |
| **Google Analytics** | User tracking & insights |

---

## 📁 Project Structure

```
src/
├── firebase.js          # Firebase configuration
├── App.js              # Main application component
├── components/         # React components
├── pages/              # Page components
└── styles/             # CSS styling
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Jacksonbond-haizz/Forchung_MVP.git
cd Forchung_MVP
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the project root with your Firebase credentials:

```env
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
REACT_APP_MEASUREMENT_ID=your_measurement_id
```

### 4. Start Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

---

## 🔐 Security

- **Environment Variables** - API keys are stored in `.env.local` (never committed to GitHub)
- **Firebase Security** - Authentication and data access rules configured
- **Best Practices** - Sensitive credentials are protected and not exposed in code

---

## 📦 Available Scripts

```bash
npm start       # Run development server
npm test        # Run tests
npm build       # Build for production
npm eject       # Eject from Create React App (irreversible)
```

---

## 🌟 Features

- ✅ User authentication with Firebase
- ✅ Real-time data synchronization
- ✅ Project creation and management
- ✅ Analytics tracking
- ✅ Responsive design

---

## 🔄 Future Enhancements

Potential features for future versions:
- Team collaboration tools
- Advanced filtering and search
- Data export functionality
- Mobile app support
- Integration with third-party tools

---

## 👤 Author

**Aung Yee Mon Myo**

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contact

For questions, feedback, or collaboration opportunities, reach out via GitHub.
