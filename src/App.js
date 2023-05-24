import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";


function App() {
  return (
    <div className="container py-3">
      <Header/>
      <HashRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
        </Routes>
      </HashRouter>
      
      <Footer/>

      </div> );


}

      export default App;
