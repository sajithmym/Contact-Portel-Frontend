import {  useNavigate } from "react-router-dom"

export default function Register() {

  const Navigate = useNavigate()

  const go_login = () =>{
    Navigate('/login')
  }

  return (
    <div className="flex bg-custom-bg bg-no-repeat h-screen backdrop-blur-lg overflow-hidden">
      <div className="w-3/4 h-custom bg-custom rounded-right">

        <div className="ms-20 my-36">
          <h1 className="text-white text-4xl font-bold">Register Now!</h1>

          <form class="bg-inherit shadow-md rounded mt-10">
            <div class="mb-4">

              <input
                class="shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96 rounded-3xl"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>

            <div class="mb-4">

              <input
                class="shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96 rounded-3xl"
                id="conform_password"
                type="password"
                placeholder="Create Password"
              />
            </div>

            <div class="mb-6">

              <input
                class="shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96 rounded-3xl"
                id="password"
                type="password"
                placeholder="Confirm password"
              />
            </div>
            <div class="flex items-center justify-start">
              <button
                class="mt-5 border border-white  bg-inherit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                register
              </button>
            </div>
            <br/> <br/>
            <a className="underline text-white text-2xl font-normal cursor-pointer hover:text-blue-200" onClick={() => go_login()}> &gt; Back to login</a>
          </form>
        </div>
      </div>

      <div className="w-1/2 h-screen">
        <div className="mt-56 ml-28 flex">
          <img className="w-10 h-10 mt-1" src="/public/icon_2.png" alt="icon" />
          <div className="text-black text-4xl font-bold mb-2">twc</div>
        </div>

        <h1 className="text-cus ml-28 text-5xl font-bold">Contacts</h1>
        <h3 className="text-cus ml-28 mt-2 text-5xl font-normal"> Portal </h3>
      </div>
    </div>
  )
}
