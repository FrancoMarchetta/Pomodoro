import { HashRouter as Router, Routes, Route } from "react-router";
import HomePage from "./assets/views/HomePage";
import Start from "./assets/views/Start";
import Timer from "./assets/views/Timer";
function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route element={<HomePage></HomePage>} path="/"></Route>
          <Route element={<Start></Start>} path="/chronometer"></Route> {/**start ahora es el chronometro */}
          <Route element={<Timer></Timer>} path="/timer"></Route>

        </Routes>
      </Router>


    </>
  )
}

export default App

