
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function Register() {

  const Navigate = useNavigate()

  const go_login = () => {
    Navigate('/login')
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // make axios post request for create user
  const Request_call = async (url, data) => {
    const response = await axios.post(url, data);
    return response;
  };

  // Registe logic
  const Register = async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (!(password === confirmPassword)) {
      alert('Your password and confirmation password do not match.')
      return 0
    }
    const url = "http://127.0.0.1:8520/signup";
    const data = {
      email: email,
      password: password,
    };

    const response = await Request_call(url, data);
    alert(response.data);

    if (response.data === "User Created Successfully")
      go_login() // navigate to signin page
  };

  return (
    <div className="flex bg-custom-bg bg-no-repeat h-screen backdrop-blur-lg overflow-hidden">
      <div className="w-3/4 h-custom bg-custom rounded-right">

        <div className="ms-20 my-36">
          <h1 className="text-white text-4xl font-bold">Register Now!</h1>

          <form className="bg-inherit shadow-md rounded mt-10" onSubmit={Register}>
            <div className="mb-4">

              <input
                className="shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96 rounded-3xl"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">

              <input
                className="shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96 rounded-3xl"
                id="conform_password"
                type="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="mb-6">

              <input
                className="shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-96 rounded-3xl"
                id="password"
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-start">
              <button
                className="mt-5 border border-white bg-inherit hover:bg-black text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                register
              </button>
            </div>
            <br /> <br />
            <a className="underline text-white text-2xl font-normal cursor-pointer hover:text-black hover:bg-white hover:px-8 py-2 rounded-full" onClick={() => go_login()}> &gt; Back to login</a>
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
