import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setjokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((respose) => {
      setjokes(respose.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })
  return (
    <>
      <h1>chai and full stack</h1>
      <p>JOKES : {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <dev key = {joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </dev>
        ))
      }
    </>
  )
}

export default App
