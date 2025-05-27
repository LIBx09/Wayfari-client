# 🌍 Wayfari Tourism - The Ultimate Tourist Guide

![Wayfari Tourism](wayfari.png)

Wayfari Tourism is an innovative travel platform designed to cater to a diverse range of users, including tourists, guides, and admins. The platform facilitates seamless bookings and payment processing through Stripe, ensuring a secure and convenient experience for all users. Tourists can explore and book unique travel experiences, while guides have the opportunity to apply and offer their expertise. Admins oversee the platform, managing users and ensuring smooth operations. Additionally, Wayfari Tourism allows users to share their personal travel stories, creating a community of adventurers. The platform also hosts images to enhance the visual appeal and storytelling aspect.

🔗 **Live Site:** [Wayfari Tourism](https://watfari-tourism.web.app/)  
📂 **GitHub Repo:** [View on GitHub](https://github.com/LIBx09)

---

## 🚀 Features

✅ **Explore Popular Destinations** – Get in-depth details on **top tourist attractions** in Bangladesh.  
✅ **Cultural & Cuisine Insights** – Discover local traditions, food, and events.  
✅ **Interactive Map** – Easily navigate through destinations with **geolocation support**.  
✅ **User Reviews & Ratings** – Share and read **real traveler experiences**.  
✅ **Secure Online Payments** – Seamless integration with **Stripe** for hassle-free bookings.  
✅ **Bookmark & Wishlist** – Save places you want to visit later.  
✅ **Fast & Responsive** – Built using **React, Vite, and Tailwind CSS** for a seamless experience.

---

## 🛠 Tech Stack

### **Frontend:**

- **React 18** – Component-based UI
- **Vite** – Fast development environment
- **Tailwind CSS + DaisyUI** – Modern styling
- **React Router Dom** – Navigation handling
- **Axios** – API calls
- **Firebase** – Authentication and data storage
- **Stripe API** – Payment processing
- **AOS & Lottie** – Smooth animations

### **Backend:**

- **Node.js & Express.js** – Server-side handling
- **MongoDB** – NoSQL database
- **JWT (JSON Web Token)** – Secure authentication
- **Stripe** – Payment gateway
- **Dotenv** – Environment variable management

---

## 🌎 Live Demo

🔗 **[Wayfari Tourism (Live)](https://watfari-tourism.web.app/)**

---

## 📥 Installation

Follow these steps to set up the project on your local machine.

### **Prerequisites:**

✔️ **Node.js** (Latest version)  
✔️ **MongoDB** (Local or cloud-based)  
✔️ **Git**

### **Clone the Repository:**

```sh
git clone https://github.com/LIBx09/wayfari-tourism.git
cd wayfari-tourism
```

### **Install Frontend Dependencies:**

```sh
cd client
npm install
```

### **Install Backend Dependencies:**

```sh
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a **`.env`** file in both the **frontend** and **backend** directories and add the following variables.

### **Frontend (`.env` file in `/client`)**

```
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
VITE_Payment_Gateway_PK=YOUR_STRIPE_PUBLIC_KEY
VITE_Image_Key=YOUR_IMAGE_UPLOAD_KEY
```

### **Backend (`.env` file in `/server`)**

```
USER_DB=YOUR_MONGODB_USERNAME
PASS_DB=YOUR_MONGODB_PASSWORD
ACCESS_TOKEN=YOUR_SECRET_ACCESS_TOKEN
STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
```

🚨 **Important:** Never share your API keys, database credentials, or secret tokens publicly.

---

## ▶️ Usage

### **Start Frontend**

```sh
cd client
npm run dev
```

### **Start Backend**

```sh
cd server
npm start
```

The frontend will run on `http://localhost:5173/` and the backend on `http://localhost:5000`.

---

## 📡 API Endpoints

| Method   | Endpoint        | Description                    |
| -------- | --------------- | ------------------------------ |
| **GET**  | `/destinations` | Fetch all tourist destinations |
| **POST** | `/bookings`     | Create a new booking           |
| **GET**  | `/bookings/:id` | Get booking details            |
| **POST** | `/payment`      | Process Stripe payment         |
| **POST** | `/auth/signup`  | User signup                    |
| **POST** | `/auth/login`   | User login                     |

📌 **More API details can be found in the [API Documentation](https://your-api-docs-link.com).**

---

## 📜 License

This project is **licensed under ISC**. Feel free to use and modify it.

---

## 👥 Contributors

👤 **Ibrahim Fuad**  
📂 **GitHub Profile:** [LIBx09](https://github.com/LIBx09)  
📩 **Email:** ibrahimfuad729@gmail.com

Want to contribute? **Feel free to fork this repo and submit a pull request!** 🚀

---

## 📞 Contact

For questions or collaboration, reach out to:  
✉️ **Email:** ibrahimfuad729@gmail.com  
🌐 **Website:** [Wayfari Tourism](https://watfari-tourism.web.app/)
