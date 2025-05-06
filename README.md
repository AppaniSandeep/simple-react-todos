# 📝 Simple React Todos App

A responsive todo list application built using React. Users can add and delete todo items, with all data persisted via a REST API. The project is styled with plain CSS and organized in a modular folder structure.

## 🚀 Features

- Add todos
- Delete todos
- Fetch from a live backend API
- Responsive and mobile-friendly
- Plain CSS (no frameworks)

## 🧱 Project Structure

simple-react-todos/
├── public/
│ └── index.html
├── src/
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── components/
│ ├── AddTodo/
│ │ ├── index.js
│ │ └── index.css
│ ├── SimpleTodos/
│ │ ├── index.js
│ │ └── index.css
│ └── TodoItem/
│ ├── index.js
│ └── index.css
├── package.json
├── README.md
├── LICENSE
└── .gitignore

bash
Copy
Edit

## 🛠️ Technologies Used

- React (with Hooks)
- Plain CSS
- Fetch API for HTTP requests
- REST API hosted at: `https://simpletodos-06ex.onrender.com/todos`

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/simple-react-todos.git
cd frontend
2. Install Dependencies
bash
npm install
3. Run the App
bash
npm start
Then open your browser at http://localhost:3000.

🌐 API Endpoints
GET /todos – Get all todos

POST /todos – Add a new todo

DELETE /todos/:id – Delete a todo

📄 License
This project is licensed under the MIT License.