import { BrowserRouter , Route , Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Content from "./component/Contents";
import Footer from "./component/PageFooter";
import ErrorNotFound from "./component/Error404";
import Home from "./component/Home";
import './App.css'

const App = ()=> {

  return (
    <div>
          <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} /> 
          <Route path="/content" element={<Content/>} /> 
          <Route path="/footer" element={<Footer/>} /> 
          <Route path="*" element={<ErrorNotFound/>} /> 
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App ;
