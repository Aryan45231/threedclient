import { useState } from 'react'
import ScreenRoutes from "../Routers/index"
import ContextProvider from "../Context/index"
import Component from '../Components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>
    <ScreenRoutes/>
    </ContextProvider>
  )
}

export default App
