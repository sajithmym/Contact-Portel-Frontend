/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import Welcome from "./Components/welcome";
import Register from "./Components/register"
import Login from "./Components/login"
import Initial_add_contact from "./Components/initial_add"
import All_contact from "./Components/all_contact";


function App() {

  const ProtectedRoute = ({ children  }) => {
    if (false) {
      return <Navigate to='/login' />
    }
    return children
  }

  return (
    <div className="main">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<ProtectedRoute> <Welcome /> </ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contacts/new' element={<Initial_add_contact />} />
          <Route path='/contacts' element={<All_contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
