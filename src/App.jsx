import GlobalStyle from "./GlobalStyle";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage"
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import NewItem from "./pages/NewItem";
import ListItems from "./components/ListItems";
import EditarItem from "./pages/EditarItem";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {

  const [user, setUser] = useState(null)

  const handleLog = (datos) =>{
    setUser(datos)
  }

  return (
    <>
      <GlobalStyle/>
      <Router basename="/PlusUltra-eCommerce-React/">
        <Header user={user} handleLog={handleLog}/>
          <Routes>
            <Route path='/' element={<Home user={user} handleLog={handleLog}/>}/>
            <Route path='/productos/:id' element={<ItemPage/>}/>
            <Route path='/login' element={<Login handleLog={handleLog}/>}/>
            <Route element={<ProtectedRoute user={user}/>}>
              <Route path='/productos' element={<Productos/>}/>
              <Route path='/add-item' element={<NewItem/>}/>
              <Route path='/edit-item' element={<EditarItem/>}/>
            </Route>
            <Route path='/telescopios' element={<ListItems category = "telescopios"/>}/>
            <Route path='/binoculares' element={<ListItems category = "binoculares"/>}/>
            <Route path='/microscopios' element={<ListItems category = "microscopios"/>}/>
            <Route path='*' element={<Page404/>}/>
          </Routes>
      <Footer/>
      </Router>
    </>
    
  )
}

export default App;
