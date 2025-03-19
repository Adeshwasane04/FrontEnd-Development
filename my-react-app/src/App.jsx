import { useState } from 'react';
import Card from './Components/Card';
import SongDowonloader from './Components/Song-Dowonloader'
import './App.css';

function App() {
  
    return  (
      <div>
      <SongDowonloader/>
      <Card/>
       </div>
    )
  ;
}

export default App;
