# ❤️ DateMe

**DateMe** is a sleek, high-performance dating platform designed to bring people together through a seamless user experience. Built with a lightning-fast **FastAPI** backend and a responsive **React** frontend, it offers a smooth interface for finding, matching, and real-time communication.



## ✨ Features

* **Custom Profiles:** Create a detailed bio and manage personal information.
* **Photo Management:** Upload and update profile pictures effortlessly.
* **The Match Logic:** Like or reject potential partners. 
* **Mutual Matching:** When two users like each other, it's a match!
* **Real-time Chat:** Integrated messaging system to start conversations immediately after matching.



## 🛠️ Tech Stack

### Frontend
* **React.js** - UI components and state management.
* **Tailwind CSS** - Modern, responsive styling.
* **Axios** - Handling API requests.

### Backend
* **FastAPI** - High-performance Python framework.
* **WebSockets** - Powering the real-time chat functionality.
* **JWT Authentication** - Secure user sessions and data protection.
* **SQLAlchemy** - Database ORM for persistent storage.



## 🚀 Getting Started

### 1. Backend Setup
```bash
cd backend
python -m venv .venv
source .venv/bin/activate # for Linux / Mac
./.venv/Scripts/activate # for Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm start
```


## 🤝 Contributing
* Fork the repo.
* Create your feature branch (git checkout -b feature/AmazingFeature).
* Commit your changes (git commit -m 'Add AmazingFeature').
* Push to the branch (git push origin feature/AmazingFeature).
* Open a Pull Request.

<hr/>

Developed with lots of love and caffeine by Sanjeeb Poudel