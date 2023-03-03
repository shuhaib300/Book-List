import logo from './logo.svg';
import './App.css';
import BookList from './BookList';
import Search from './View';
import { createContext, useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import View from './View';

const newcontext=createContext();


function App() {
  const [array,setarray]=useState([])
  return (
    <div className="App">
    <newcontext.Provider value={{array,setarray}}>
    {/* <Search/> */}
      <BrowserRouter>
      <Routes>
      
      <Route path='/' element={<BookList/>}/>
      <Route path='/view/:isbn13' element={<View/>}/> 
      </Routes>
      </BrowserRouter>
      </newcontext.Provider>
  
    </div>
  );
}

export default App;
export {newcontext}