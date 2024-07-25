import react from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App=()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<h1>Home </h1>} />
        <Route path="about" element={<h1>about</h1>} />
        <Route path="contact" element={<h1>Contact</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;