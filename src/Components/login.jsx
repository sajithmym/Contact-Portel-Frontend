import { useNavigate } from "react-router-dom"

export default function Login() {

  const Navigate = useNavigate()

  const go_Register = () =>{
    Navigate('/Register')
  }


  return (
    <div className="flex bg-custom-bg bg-no-repeat h-screen backdrop-blur-lg overflow-hidden">
      <div className="w-3/4 h-custom bg-custom rounded-right">

        <div className="ms-20 my-36 ml-2">
          <h1 className="text-white text-4xl font-bold">Hi there,</h1>
          <h3 className="text-white text-2xl font-normal">Welcome to our <br /> Contacts portal</h3>


          <form className="bg-inherit shadow-md rounded mt-10">
            <div className="mb-4">

              <input
                className="shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96 rounded-3xl"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-6">

              <input
                className="shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96 rounded-3xl"
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-start">
              <button
                className="mt-5 border border-white  bg-inherit hover:bg-black text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                login
              </button>

              <div className="mt-4 pl-4 text-white text-2xl font-normal"> or
              </div>  <a className="underline mt-4 pl-4 text-white text-2xl font-normal cursor-pointer hover:text-black hover:bg-white hover:px-8 py-2 rounded-full hover:ml-4" onClick={() => go_Register()}>Click Here to Register</a>
            </div>
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
