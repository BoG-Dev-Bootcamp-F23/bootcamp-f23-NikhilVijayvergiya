import './App.css';
import LinesPage from './pages/LinePages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { useState } from 'react';

function App() {

  const [currColor, setColor] = useState("GOLD");




  return (
    <BrowserRouter>
        <Routes>
            <Route
            index
            element = {<Home currColor = {currColor} setColor = {setColor} /> }
          />          
          <Route path="about" element={<About/>} />
          <Route path="/Red" element = {<LinesPage currColor = {currColor} setColor = {setColor} /> } />
          <Route path="/Blue" element = {<LinesPage currColor = {currColor} setColor = {setColor} /> } />
          <Route path="/Green" element = {<LinesPage currColor = {currColor} setColor = {setColor} /> } />
          <Route path="/Gold" element = {<LinesPage currColor = {currColor} setColor = {setColor} /> } />
        </Routes>
    </BrowserRouter>

    // <div className="App">
    //   <LinesPage></LinesPage>
    // </div>
  );
}

export default App;
