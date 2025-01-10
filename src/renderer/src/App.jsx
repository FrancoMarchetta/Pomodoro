import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./assets/views/HomePage";
import Start from "./assets/views/Start";
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<HomePage></HomePage>} path="/"></Route>
          <Route element={<Start></Start>} path="/start"></Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

