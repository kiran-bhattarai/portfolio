import Home from "./pages/Home"
import Default from "./pages/Default"
import { Routes, Route } from "react-router"

function App() {

  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Default />}></Route>
      </Routes>
  )
}

export default App