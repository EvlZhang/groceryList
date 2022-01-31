import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './home/Home';
import Joes from './traderJoes/Joes';
import {BrowserRouter,Routes, Route} from 'react-router-dom'


function App() {
  return (
      <BrowserRouter>
          <Routes>

              <Route path='/' element={<Home />} />
              <Route path='/Joes' element={<Joes />}/>

          </Routes>
      </BrowserRouter>
  );
}

export default App;
