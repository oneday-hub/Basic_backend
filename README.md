# Full Stack Basic

A beginner-friendly full-stack project that connects a React frontend to an Express backend.

The frontend asks the backend for a list of jokes, and the backend sends joke data as JSON. This is a simple but important full-stack pattern: React shows the UI, Express provides the API, and Axios sends the request between them.

## What This Project Teaches

- How to create a React app with Vite
- How to create a Node.js backend with Express
- How to make an API route
- How to call the backend from React using Axios
- How Vite proxy sends `/api` requests to the backend
- How `useState` and `useEffect` work together to show backend data on the page

## Tech Stack

| Part | Technology | Purpose |
| --- | --- | --- |
| Frontend | React | Builds the user interface |
| Frontend Tool | Vite | Runs and builds the React app |
| Backend | Node.js + Express | Creates the server and API routes |
| HTTP Client | Axios | Sends requests from React to Express |
| Package Manager | npm | Installs dependencies and runs scripts |

## Project Structure

```text
fullstackbasic/
  backend/
    package.json
    server.js

  frontend/
    package.json
    vite.config.js
    index.html
    src/
      App.jsx
      App.css
      index.css
      main.jsx
      assets/

  notes.txt
  README.md
```

## How The App Works

1. The Express backend runs on `http://localhost:3000`.
2. The React frontend runs on `http://localhost:5173`.
3. React uses Axios to request `/api/jokes`.
4. Vite sees `/api` and forwards the request to `http://localhost:3000/api/jokes`.
5. Express sends back an array of jokes.
6. React stores the jokes in state and displays them on the page.

## API Routes

### Check if the backend is running

```http
GET /
```

Response:

```text
Server is ready
```

### Get jokes

```http
GET /api/jokes
```

Example response:

```json
[
  {
    "id": 1,
    "title": "joke no 1",
    "content": "This is a joke"
  },
  {
    "id": 2,
    "title": "joke no 2",
    "content": "This is joke no 2 based on engineers"
  },
  {
    "id": 3,
    "title": "joke no 3",
    "content": "This is joke no 3 based on professors"
  }
]
```

## Setup Instructions

You need Node.js and npm installed before running this project.

Check if they are installed:

```bash
node -v
npm -v
```

If both commands show version numbers, you are ready.

## Run The Backend

Open a terminal in the project root, then run:

```bash
cd backend
npm install
npm start
```

You should see:

```text
Server running at http://localhost:3000
```

To test the backend, open this in your browser:

```text
http://localhost:3000
```

To see the jokes API directly, open:

```text
http://localhost:3000/api/jokes
```

## Run The Frontend

Open a second terminal in the project root, then run:

```bash
cd frontend
npm install
npm run dev
```

Vite will show a local URL, usually:

```text
http://localhost:5173
```

Open that URL in your browser.

## Important Commands

### Backend

| Command | Meaning |
| --- | --- |
| `npm install` | Installs backend packages |
| `npm start` | Starts the Express server |

### Frontend

| Command | Meaning |
| --- | --- |
| `npm install` | Installs frontend packages |
| `npm run dev` | Starts the React development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |
| `npm run lint` | Checks the frontend code with ESLint |

## Beginner Explanation Of Key Files

### `backend/server.js`

This file creates the Express server.

Important parts:

- `import express from 'express'` loads Express.
- `const app = express()` creates the app.
- `app.get('/')` creates a basic route.
- `app.get('/api/jokes')` creates the jokes API route.
- `app.listen(port)` starts the server.

### `frontend/src/App.jsx`

This file contains the main React component.

Important parts:

- `useState([])` stores the jokes.
- `useEffect(...)` runs code when the component renders.
- `axios.get('/api/jokes')` asks the backend for jokes.
- `setjokes(response.data)` saves the jokes in React state.
- `jokes.map(...)` displays each joke on the page.

### `frontend/vite.config.js`

This file contains the Vite proxy:

```js
server: {
  proxy: {
    '/api': 'http://localhost:3000',
  },
}
```

This means that frontend requests starting with `/api` are forwarded to the backend server.

## Common Problems And Fixes

### Frontend shows no jokes

Make sure the backend is running first:

```bash
cd backend
npm start
```

Then run the frontend in another terminal:

```bash
cd frontend
npm run dev
```

### Browser says the site cannot be reached

Check that you are opening the correct URL:

- Backend: `http://localhost:3000`
- Frontend: `http://localhost:5173`

### `/api/jokes` does not work from the frontend

Check that `frontend/vite.config.js` has this proxy:

```js
proxy: {
  '/api': 'http://localhost:3000',
}
```

Also restart the frontend server after changing `vite.config.js`.

## Project Review Notes

This is a good beginner full-stack project because it already has the most important pieces: a backend route, a frontend request, and a proxy connection between them.

Small improvements you can make next:

- In `frontend/src/App.jsx`, add an empty dependency array to `useEffect` so the API call runs once when the page loads.
- Change `<dev>` to `<div>` in the joke list.
- Rename `setjokes` to `setJokes` to follow common React naming style.
- Remove unused imports like `reactLogo`, `viteLogo`, and `heroImg` if they are not displayed.
- Update the backend comment from "5 jokes" to "3 jokes", or add two more jokes.
- Later, add a real database such as MongoDB instead of storing jokes directly in `server.js`.

## Next Learning Steps

After you understand this project, try these upgrades:

1. Add a form in React to submit a new joke.
2. Add a `POST /api/jokes` route in Express.
3. Add `express.json()` so the backend can read JSON request bodies.
4. Store jokes in a database.
5. Add loading and error messages in the frontend.
6. Deploy the frontend and backend online.

## Short Summary

This project is a simple React + Express full-stack app.

React runs the frontend, Express runs the backend, Axios sends requests, and Vite proxy connects both parts during development.
