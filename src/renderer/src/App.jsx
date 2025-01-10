import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./assets/views/HomePage";
import ReactAudioPlayer from "react-audio-player";
function App() {

  return (
    <>

      <ReactAudioPlayer ></ReactAudioPlayer>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage></HomePage>} path="/"></Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App

