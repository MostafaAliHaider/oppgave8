
import { useState } from 'react';
import './App.css';
import Movies from './components/Movies';

function App() {

  const [data, setData ] = useState ('')
  
  return (
    <div >
     <Movies />
    
    </div>
  );
}

export default App;
