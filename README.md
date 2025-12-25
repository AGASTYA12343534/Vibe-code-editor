⚡ Vibecode — Browser-Native AI Development Studio

Vibecode is a browser-first AI-powered development environment that allows developers to write, run, and experiment with code entirely inside the browser.
It removes the need for heavy local setup by combining an in-browser code editor, live execution, and offline AI assistance into one seamless workspace.

The goal of Vibecode is to make learning, prototyping, and rapid development simple, fast, and accessible.

🚀 Why Vibecode?

Unlike traditional online IDEs or cloud-based editors, Vibecode focuses on:

Local-first AI using on-device models

Instant execution environments via WebContainers

Full-stack workflows, not just frontend demos

Clean and understandable architecture for learners

🧩 Key Features
🔐 Authentication

OAuth-based authentication

Supports Google and GitHub

Secure session handling

🧑‍💻 In-Browser Coding

Monaco Editor with VS Code–like experience

Syntax highlighting and formatting

Keyboard-friendly workflows

📁 Workspace Management

Create, edit, rename, and delete files

Folder-based project organization

Familiar IDE-style layout

⚡ Live Runtime Execution

Run frontend and backend projects in-browser

No local Node.js installation required

Powered by WebContainers

🖥️ Integrated Terminal

Fully embedded terminal using xterm.js

Execute commands inside the browser runtime

Tight integration with the workspace

🤖 Offline AI Assistance

Local AI models via Ollama

Context-aware code suggestions

Faster responses without network dependency

💬 AI Chat

Ask questions about your codebase

Request explanations or refactors

Helpful for debugging and learning

🧰 Project Templates

Vibecode provides ready-to-use starters:

React

Next.js

Express

Hono

Vue

Angular

Each template is preconfigured and runnable instantly.

🛠️ Tech Stack
Area	Technology
Framework	Next.js (App Router)
Language	TypeScript
Styling	Tailwind CSS, ShadCN UI
Auth	NextAuth
Editor	Monaco Editor
AI	Ollama (local LLMs)
Runtime	WebContainers
Terminal	xterm.js
Database	MongoDB
🖥️ Local Development Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/vibecode-editor.git
cd vibecode-editor

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables
cp .env.example .env.local


Fill in the required credentials:

AUTH_SECRET=your_auth_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_secret
AUTH_GITHUB_ID=your_github_client_id
AUTH_GITHUB_SECRET=your_github_secret
DATABASE_URL=your_mongodb_url
NEXTAUTH_URL=http://localhost:3000

4️⃣ Start the AI model

Make sure Ollama is installed:

ollama run codellama

5️⃣ Run the development server
npm run dev


Visit:

http://localhost:3000

🧠 Design Principles

Browser-first development

Offline-friendly AI

Readable and maintainable code

Focused on learning and experimentation

🔮 Future Improvements

Collaborative editing

Workspace persistence

AI-based test generation

GitHub repository sync

Plugin system

📜 License

This project is licensed under the MIT License.

🙌 Acknowledgements

Monaco Editor

WebContainers

Ollama

xterm.js

NextAuth