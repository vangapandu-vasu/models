
import { BrowserRouter,Routes, Route } from 'react-router'
import './App.css'
import Base from "./base"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
