/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import Welcome from "./Components/welcome";
import Register from "./Components/register"
import Login from "./Components/login"
import Initial_add_contact from "./Components/initial_add"
import All_contact from "./Components/all_contact";
import Add_contact from "./Components/Add_Contact";


function App() {

  const array = JSON.parse(localStorage.getItem("twc-test-array"));

  const ProtectedRoute = ({ children  }) => {
    if (array)
      if ((array[0] === 'user'))
          return children
    return <Navigate to='/login' />
  }

  return (
    <div className="m-0 p-0 h-screen w-screen bg-white">
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<ProtectedRoute> <Welcome /> </ProtectedRoute>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/contacts/new' element={<Initial_add_contact />} />
          <Route path='/contacts' element={<All_contact />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/Add' element={<Add_contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
