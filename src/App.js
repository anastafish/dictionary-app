import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [toggle, setToggle] = useState(false)
  const [font, setFont] = useState('serif')

  return (
    <div>
      <Header toggle={toggle} setToggle={setToggle} font={font} setFont={setFont}/>
      <Main font={font} setFont={setFont} toggle={toggle}/>
    </div>      
  );
}

export default App;
