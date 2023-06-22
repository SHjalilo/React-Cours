import { BrowserRouter , Route , Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import Content from "./component/Contents";
import Footer from "./component/PageFooter";
import './App.css'

const App = ()=> {

  return (
    <div>
          <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/content" element={<Content/>} /> 
          <Route path="/footer" element={<Footer/>} /> 
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App ;
