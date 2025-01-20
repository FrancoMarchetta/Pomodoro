import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./assets/views/HomePage";
import Start from "./assets/views/Start";
import Timer from "./assets/views/Timer";
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<HomePage></HomePage>} path="/"></Route>
          <Route element={<Start></Start>} path="/chronometer"></Route> {/**start ahora es el chronometro */}
          <Route element={<Timer></Timer>} path="/timer"></Route>

        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

