# Bookstore Catalogue Website

A full-stack bookstore catalogue website built with **ReactJS** for the frontend and **Node.js** with **MongoDB** (using Mongoose) for the backend. This web app allows users to browse, add, and manage books in the catalogue.

---

## 🚀 Features

- **Home Page**: An introduction to the bookstore.
- **Books Page**: Displays a list of books fetched from the MongoDB database.
- **Add Books Page**: A form to add new books to the catalogue (stores data in MongoDB).
- **Search/Filter**: Optionally, search books by title or author.
- **Mobile-Responsive**: The website is fully responsive and adapts to all screen sizes.

---

## 🛠️ Tech Stack

- **Frontend**: ReactJS
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (using Mongoose for data modeling)
- **Styling**: CSS / SCSS (based on your setup

---

## 📂 Project Structure


---

## ⚙️ Installation & Setup

### Backend (Node.js + MongoDB)

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Ved3205/BookHive.git
    cd bookstore-catalogue/backend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Configure MongoDB**:
   - Replace the username and password in `conn.js` with your own MongoDB credentials.

    ```js
    mongoose.connect("mongodb+srv://<username>:<password>@cluster0.qvn7q.mongodb.net/BookHive?retryWrites=true&w=majority&appName=Cluster0")
    ```

4. **Run the backend**:

    ```bash
    node app.js
    ```


### Frontend (ReactJS)

1. **Navigate to the frontend directory**:

    ```bash
    cd frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the frontend**:

    ```bash
    npm start
    ```

---

## 🎮 Usage

- **Books Page**: View a list of books fetched from the database.
- **Add Books Page**: Add new books to the catalogue by filling out the form and submitting it.
- **Backend**: The backend exposes an API that serves books and allows adding new books.

---

## 🚀 Deployment

- **Backend Deployment**: You can deploy the backend to **Heroku** or **DigitalOcean**.
- **Frontend Deployment**: The React app can be deployed on **Netlify** or **Vercel**.
  
Make sure to update environment variables (for MongoDB URI) before deploying.

---

## 📝 Notes

- Ensure that **MongoDB Atlas** is correctly set up with your **username** and **password**.
- **IP Whitelisting** in MongoDB Atlas might be required to allow your application to connect.

---

## 👤 Author

- **Your Name**
- GitHub: (https://github.com/Ved3205)

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

