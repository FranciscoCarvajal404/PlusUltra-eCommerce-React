import GlobalStyle from "./GlobalStyle";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage"
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import NewItem from "./pages/NewItem";

function App() {

  return (
    <>
      <GlobalStyle/>
      <Router>
        <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/productos/:id' element={<ItemPage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/add-item' element={<NewItem/>}/>
            <Route path='*' element={<Page404/>}/>
          </Routes>
      <Footer/>
      </Router>
    </>
    
  )
}

export default App;
