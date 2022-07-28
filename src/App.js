
import { ethers } from 'ethers';
import {useState} from 'react';
import '../src/App.css'
import {
  Route,
  Routes
} from "react-router-dom";
import Home from './Components/pages/Home';
import Create from './Components/pages/Create';
import Categories from './Components/Categories';
import ModalBox from './Components/ModalBox';
import MyDigitalAsset from './Components/MyDigitalAsset';
import MYNFTS from './Components/MYNFTS';
import './App.css'
import Art from './Components/pages/Art';

 function App() {
  
  return (
   <>
    
    <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element = {<Create/>}/>
    <Route path='/categories' element={<Categories/>}/>
    <Route path='/MyAsset' element={<MYNFTS/>}/>
    <Route path='/art' element={<Art filter="art" heading="Art Collection"/>}/>
    <Route path='/photography' element={<Art filter="photography" heading="Photography Collection"/>}/>
    <Route path='/sport' element={<Art filter="sport" heading="Sport Collection"/>}/>
    <Route path='/music' element={<Art filter="music" heading="Music Collection"/>}/>
    <Route path='/payment' element={<ModalBox/>}/>
    </Routes>
    
    </>
     
  );
}

export default App;
