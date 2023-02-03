import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


function App() {
  const [shadow, setShadow] = useState('black');
  const [textArea, setTextares]  = useState('white');
  const [mode, setMode]= useState('light');
  const activate=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='gray';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }

    //shadow

    if (shadow==='black'){
      setShadow('red');
    }else{
      setShadow('black');
    }

    //gray

    if (textArea==='white'){
      setTextares('#212529');
    }else{
      setTextares('white');
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" about= "About Us" mode={mode} activate={activate}  shadow ={{boxShadow:`0px 0px 15px 0px ${shadow}`}} />
      <Routes>
        <Route exect path='/' element={<Textbox heading ="Enter the text in the box blow" textArea={textArea}/>}/>
        <Route exect path='/About'element={<About />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;