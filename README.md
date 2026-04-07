# 🔗 URL Shortener API

A production-ready **URL Shortener backend service** built using **Node.js, Express, MongoDB**, and **Mongoose**.  
This project allows users to generate short URLs and automatically tracks visit history for analytics.

---

## 🚀 Features

- Generate short URLs using unique IDs
- Redirect short URLs to original long URLs
- Track visit history (timestamp-based)
- RESTful API design
- Clean MVC architecture
- Environment-based configuration
- MongoDB integration using Mongoose

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Utilities:** nanoid, dotenv  
- **Version Control:** Git & GitHub  

---

## 📁 Project Structure
├── app.js
├── server.js
├── config/
│ └── db.js
├── controllers/
│ └── url.controller.js
├── models/
│ └── url.model.js
├── routes/
│ └── url.routes.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md



---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:
PORT=4000
MONGO_URI=your_mongodb_connection_string



---

## 📌 API Endpoints

### 1️⃣ Create Short URL

**POST** `/url`

**Request Body**
```json
{
  "url": "https://example.com"
}


```
Response

{
  "id": "Kue8gqtw"
}


How to Run Locally
# Clone the repository
git clone https://github.com/your-username/url-shortener.git

# Navigate into project directory
cd url-shortener

# Install dependencies
npm install

# Start server
npm start

Server runs at:
http://localhost:4000


👨‍💻 Author
Shivam Raj
Backend Developer | Node.js | MongoDB
📌 This project demonstrates backend fundamentals such as routing, database design, REST APIs, and scalability.

⭐ If you like this project
Give it a ⭐ on GitHub — it really helps!
