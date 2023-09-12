// import {BrowserRouter,Routes,Route} from "react-router-dom";
import  Welcome  from "./pages/welcome";

function App() {

  // const ProtectedRoute = ({ children }) => {
  //   if (false) {
  //     return <Navigate to='/log' />
  //   }
  //   return children
  // }

  return (
    <div className="main">
      <Welcome/>
    </div>
  )
}

export default App
