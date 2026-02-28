# 🚀 Smart Companion

Smart Companion is a gamified productivity web application built using Next.js.

It helps users:
- Complete daily tasks
- Earn XP points
- Stay motivated with voice feedback
- Generate AI-powered productivity tasks using Ollama + Qwen 2.5

---

## ✨ Features

- ✅ Predefined productivity tasks
- 🎯 XP reward system
- 🔊 Voice feedback ("Good job!" after task completion)
- 🤖 AI-generated tasks using Ollama
- ⚡ Fast and responsive UI (Next.js App Router)
- 🌐 Deployable on Vercel

---

## 🛠 Tech Stack

- Next.js 14+
- React
- TypeScript
- Ollama (Local AI Engine)
- Qwen2.5:3B model
- Vercel (Deployment)

---

## 📦 Local Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Supritam-005/smart-companion.git
cd smart-companion
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🤖 AI Setup (Ollama Required)

This project uses Ollama locally for AI task generation.

### Install Ollama

Download from:
https://ollama.com

### Pull Qwen Model

```bash
ollama pull qwen2.5:3b
```

### Run Model

```bash
ollama run qwen2.5:3b
```

### Test API

```bash
curl http://localhost:11434/api/generate \
-H "Content-Type: application/json" \
-d '{"model":"qwen2.5:3b","prompt":"Give me a productivity task","stream":false}'
```

If you receive a response → AI is working correctly.

---

## 🚀 Deployment

### Deploy using Vercel CLI

Install Vercel CLI:

```bash
npm install -g vercel
```

Login:

```bash
vercel login
```

Deploy:

```bash
vercel --prod
```

Vercel will generate a live deployment link.

⚠️ Note:
Ollama runs locally. AI features will NOT work on Vercel unless Ollama is hosted on a server.

---

## 📁 Project Structure

```
smart-companion/
│
├── app/
│   ├── page.tsx
│   └── api/
│       └── ask-ai/
│           └── route.ts
│
├── public/
├── package.json
└── README.md
```

---

## 🎮 How It Works

1. User completes a task
2. XP increases
3. Voice feedback congratulates user
4. User can request AI-generated next task
5. AI generates productivity suggestion via Ollama

---

## 🧠 Future Improvements

- User authentication
- Database integration
- Cloud AI integration
- Task history tracking
- Leaderboard system
- Mobile optimization
- Dark mode


## 📜 License

This project is built for educational and productivity enhancement purposes.
