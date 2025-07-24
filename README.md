# VanshGPT-MERN

**VanshGPT-MERN** is a full-stack AI chat site inspired by ChatGPT, built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It features a sleek, custom-designed interface, dynamic thread-based conversations, and intelligent AI responses powered by the **OpenRouter API**.

>  This project showcases both technical and creative mastery — combining full-stack engineering with personalized AI behavior.

---

## Features

-  ChatGPT-style UI built with React   
-  Full-stack MERN architecture  
-  Persistent conversation threads using MongoDB  
-  Modular backend with RESTful APIs  
-  AI integration via OpenRouter API  
-  Fully customizable and expandable  

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/VanshGPT-MERN.git
cd VanshGPT-MERN
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `/server` folder:

```env
MONGO_URI=your_mongodb_connection_string
OPENROUTER_API_KEY=your_openrouter_api_key
```

Start the backend server:

```bash
npm start
```

### 3. Set up the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

### 4. Access the site

Go to: [http://localhost:5173](http://localhost:5173)

---

##  AI Integration

This project uses [OpenRouter](https://openrouter.ai) to generate AI responses.  
To set it up:

1. Create an account at [openrouter.ai](https://openrouter.ai)  
2. Generate your API key  
3. Add the key in your `.env` file as shown above  

---

##  Credits

Made with ❤️ by [Vansh Dokania](https://github.com/vanshDokania)  
AI powered by [OpenRouter](https://openrouter.ai)

---

##  License

This project is licensed under the [MIT License](LICENSE)
