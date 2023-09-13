import { useNavigate } from "react-router-dom"
import Logout from "./Logout"

export default function Initial_add_contact() {
  const move = useNavigate()

  const view_all = () => {
    move('/contacts')
  }
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

        <h1 className="ml-52 mt-10 text-5xl font-bold text-white">New Contact</h1>


        <div className="contact-form">
          <div className="container mx-auto">
            <form action="/contact" method="POST">

              <div className="ml-20 mt-10">
                <input type="text" name="full_name" className="m-2 w-96 px-4 py-2 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                <input type="email" name="email" className="ml-3 w-96 px-4 py-2 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>

              <div className="ml-20 mt-2 flex">
                <input type="text" name="phone_number" className="m-2 w-96 px-4 py-2 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

                <div className="mt-4 ml-4 text-2xl text-white"><label className="text-white mr-10">Gender</label>
                  <input type="radio" name="gender" value="male" className="ml-10 " /> Male
                  <input type="radio" name="gender" value="female" className="ml-10 " /> Female
                </div></div>

              <button className="ml-24 mt-8 text-white border border-solid text-xl border-white hover:bg-black px-8 py-2 rounded-full" onClick={()=> view_all()}>add your contact</button>
            </form>
            
          </div>
          <Logout/>
        </div>

      </div>
    </div>
  )
}
