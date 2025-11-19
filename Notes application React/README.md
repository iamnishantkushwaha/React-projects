# React Notes Application (Vite)

A simple **frontend-only** Notes Application built using **React + Vite**.
You can **create**, **view**, and **delete** notes.
No backend, no database, no authentication, and no localStorage.

---

## 🚀 Features

* Create notes
* View notes
* Delete notes
* 100% frontend — no data is saved after refresh

---

## 📦 Technologies Used

* **React** (Hooks)
* **Vite** (Development + Build Tool)
* **CSS** for styling

---

## 🛠️ Installation

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd notes-application-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Vite will start the development server and provide a localhost URL.

---

## 📁 Project Structure

```
Notes-application-react/
│── node_modules/
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── Card.jsx
│   │   └── Section1.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│── .gitignore
│── eslint.config.js
│── index.html
│── package.json
│── package-lock.json
│── vite.config.js
│── README.md
```

---

## 🏗️ Build for Production

```bash
npm run build
```

This generates a `dist/` folder with optimized production files.

To preview the production build:

```bash
npm run preview
```

---

## 📘 Additional Notes

* This project does **not** store notes permanently
* Refreshing the page will delete all notes
* You can deploy the build output to Netlify, Vercel, or GitHub Pages

---

## 💡 Author
