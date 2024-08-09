import { useState } from 'react'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-5 rounded-xl mb-10 text-center'>Tailwind Test</h1>
 <Cards username ="shweta" btntext="click Me"/>
 <Cards username ="Pankaj"/>
    </>
  )
}

export default App
