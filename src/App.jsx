import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './page/home/home';
import Temperature from './page/temperature/temperature';
import Co2 from './page/Co2/Co2';
import Methane from './page/methane/methane';
import No2 from './page/No2/No2';
import Arctic from './page/arctic/arctic';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {


  return (
    <>
      <BrowserRouter>
      <div>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/temperature' element={<Temperature/>}/>
          <Route path='/Co2' element={<Co2/>}/>
          <Route path='/methane' element={<Methane/>}/>
          <Route path='/No2' element={<No2/>}/>
          <Route path='/arctic' element={<Arctic/>}/>
        </Routes>
        <Footer/>
      </div>
    
      </BrowserRouter>
    </>
  )
}

export default App
