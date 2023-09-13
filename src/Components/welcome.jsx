import { useNavigate } from "react-router-dom"
import Logout from "./Logout"

export default function Welcome() {
  const navigate_var = useNavigate()
  const array = JSON.parse(localStorage.getItem("twc-test-array"));

  const go_Add_page = () => {
    navigate_var('/contacts/new')
  }

  if (array)
      if (!(array[0] === 'user'))
          navigator('/login')
  return (

    <div className="flex bg-custom-bg bg-no-repeat h-screen backdrop-blur-lg overflow-hidden">
      <div className="h-screen w-screen bg-custom rounded-cust">

        <div className="ml-24 mt-16">
          <div className="mt-10 ml-28 flex">
            <img className="w-8 h-8 mt-1" src="/public/icon_2.png" alt="icon" />
            <div className="text-white text-2xl font-bold mb-2">twc</div>
          </div>

          <div className="text-white ml-28 text-xl font-bold">Contacts</div>
          <div className="text-white ml-28 mt-2 text-xl font-normal">Portal</div>
        </div>

        <div className="ml-48 mt-20">
          <h1 className="text-white text-4xl font-bold">Welcome,</h1>
          <h3 className="text-white text-2xl font-medium">This is where your contacts will live. Click the button below <br />
            to add a new contact.</h3>
        </div>

        <button onClick={() => go_Add_page()} className="ml-48 mt-16 text-white border border-solid text-xl border-white hover:bg-black px-8 py-2 rounded-full">add your first contact</button>
        <br />
        <Logout/>
        </div>
    </div >
  )
}
