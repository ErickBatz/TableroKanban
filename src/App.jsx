import { useState } from 'react'
import './App.css'
import Tablero from './components/Tablero'
import Header from './components/Header'

function App() {
 
  return (
    <div className="app">
      <Header/>
      <Tablero className="shadow-md"/>
    </div>
  );
}

export default App
