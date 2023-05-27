import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Category from "./pages/Category";
import { connect } from "react-redux";
import useApi from "./Hooks/useApi";


function App(props) {
  const api = useApi()
  console.log("APP PROPS >> ", props)

  if(props.authState.token && !props.appDataState.user){
    api.get("user/appData")
    .then(response => {
      console.log("response.data.data.user",response.data.data.user)
      
      props.dispatch({
        type:"set_app_data",
        payload:{
          user:response.data.data.user
        }
      })
    })

  }


  return (
    <div className="container py-3">
      <Header/>
      <HashRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="category/:slug" element={<Category/>}/>
        </Routes>
      </HashRouter>
      
      <Footer/>

      </div> );


}

      // export default App;

      const mapStateToProps=(state)=>{
        return{
          ...state
        }
      }


export default connect(mapStateToProps)(App)