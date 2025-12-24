

# ⚡ Vibecode – Browser-Native AI Development Studio

Vibecode is a **fully in-browser development environment** that combines a modern code editor, live runtime execution, and local AI assistance into a single seamless experience. It is designed for developers who want to prototype, experiment, and learn **without installing heavy toolchains**.

The platform runs entirely in the browser using WebContainers and enhances productivity with **offline AI models**, real-time terminals, and a clean, developer-centric interface.

---

## 🌟 What Makes Vibecode Different?

Unlike traditional online IDEs, Vibecode focuses on:

* **Local-first AI** (no cloud dependency for suggestions)
* **Instant runtime environments** inside the browser
* **Full-stack templates**, not just frontend sandboxes
* **Human-friendly workflows**, not tutorial clones

---

## ✨ Core Capabilities

### 🔐 Authentication

* Secure OAuth-based login
* Supports Google and GitHub providers
* Session handling with modern auth flows

### 🧑‍💻 Coding Experience

* Advanced in-browser editor powered by Monaco
* Language-aware syntax highlighting and formatting
* Custom keybindings and productivity shortcuts

### 📁 Workspace Management

* Interactive file & folder explorer
* Create, rename, move, and delete files instantly
* Project-level organization similar to VS Code

### ⚡ Live Execution

* Run frontend and backend apps directly in the browser
* No local Node.js or framework installation required
* Powered by WebContainers

### 🖥️ Integrated Terminal

* Fully functional terminal using xterm.js
* Supports common shell commands
* Tight integration with the runtime environment

### 🤖 AI Assistance (Offline)

* AI-powered code suggestions using local LLMs
* Trigger completions manually or contextually
* Accept suggestions instantly without network latency

### 💬 AI Chat Support

* Chat with the AI about your codebase
* Share files or snippets for explanations and refactors
* Useful for debugging and learning

### 🎨 Interface & Accessibility

* Clean, minimal UI built for long coding sessions
* Dark and light themes supported
* Responsive layout for different screen sizes

---

## 🧩 Available Project Starters

Create a workspace using preconfigured templates:

* React
* Next.js
* Express
* Hono
* Vue
* Angular

Each template comes with a ready-to-run setup.

---

## 🧰 Technology Overview

| Area           | Tooling Used         |
| -------------- | -------------------- |
| Framework      | Next.js (App Router) |
| Language       | TypeScript           |
| UI Styling     | Tailwind CSS, ShadCN |
| Authentication | NextAuth             |
| Code Editor    | Monaco Editor        |
| AI Engine      | Ollama (local LLMs)  |
| Runtime        | WebContainers        |
| Terminal       | xterm.js             |
| Database       | MongoDB              |

---

## 🛠️ Local Setup Guide

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/vibecode-editor.git
cd vibecode-editor
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

Create a local environment file:

```bash
cp .env.example .env.local
```

Update it with your credentials:

```env
AUTH_SECRET=your_auth_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_secret
DATABASE_URL=your_mongodb_url
NEXTAUTH_URL=http://localhost:3000
```

### Step 4: Start the AI Model

Ensure **Ollama** and **Docker** are installed, then run:

```bash
ollama run codellama
```

You may use any compatible code-focused model.

### Step 5: Launch the Development Server

```bash
npm run dev
```

Open your browser and navigate to:

```
http://localhost:3000
```

---

## ⌨️ Productivity Shortcuts

| Action                | Shortcut                        |
| --------------------- | ------------------------------- |
| Trigger AI suggestion | `Ctrl + Space` / `Double Enter` |
| Accept suggestion     | `Tab`                           |
| Command palette       | `/` (if enabled)                |

---

## 🧠 Design Philosophy

* **Browser-first**: Everything should work without local setup
* **Offline-friendly AI**: Privacy and speed over cloud dependency
* **Readable architecture**: Easy to understand, extend, and maintain
* **Learning-focused**: Built to help developers grow, not just code

---

## 🔮 Planned Enhancements

* Collaborative editing
* Workspace persistence
* AI-powered test generation
* GitHub repo sync
* Plugin system for extensions

---

## 📜 License

Distributed under the **MIT License**.
See the `LICENSE` file for details.

---

## 🙌 Credits & Inspiration

* Monaco Editor
* WebContainers
* Ollama
* xterm.js
* NextAuth

---
