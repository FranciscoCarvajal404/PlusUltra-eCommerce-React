import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Page404 from "./pages/Page404";
import Home from "./pages/Home";

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Page404/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
