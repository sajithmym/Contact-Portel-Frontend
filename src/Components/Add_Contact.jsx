import { useNavigate } from "react-router-dom"
import Logout from "./Logout"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Add_contact() {
  const move = useNavigate()
  const array = JSON.parse(localStorage.getItem("twc-test-array"));

  const [gender, setGender] = useState("");
  const [Name, setName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const view_all = () => {
    move('/contacts')
  }

  const Request_call = async (url, data) => {
    const response = await axios.post(url, data);
    return response;
  };

  const create_contact = async (event) => {
    event.preventDefault();

    if (gender === "") 
      alert("pleace select a gender...")
    else {
      const url = "http://127.0.0.1:8010/create";
      const data = {
        name: Name,
        email: Email,
        gender: gender,
        mobile: Mobile,
        id: array[1]
      };

      const response = await Request_call(url, data);
      alert(response.data);
      view_all()
    }
  };

  useEffect(() => {
    if (!array) {
      move('/login');
    }
  }, []);

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
            <form action="/contact" method="POST" onSubmit={create_contact}>

              <div className="ml-20 mt-10">
                <input type="text"
                  value={Name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter Full Name Here"
                  name="full_name" className="m-2 w-96 px-4 py-2 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                <input type="email" name="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter E-mail Address Here"
                  className="ml-3 w-96 px-4 py-2 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </div>

              <div className="ml-20 mt-2 flex">
                <input type="text" name="phone_number"
                  value={Mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Enter Mobile Number Here"
                  required
                  className="m-2 w-96 px-4 py-2 border-gray-300 rounded-full shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />

                <div className="mt-4 ml-4 text-2xl text-white"><label className="text-white mr-10">Gender</label>
                  <input type="radio" name="gender" checked={gender === "Male"} onChange={handleGenderChange} value="Male" className="ml-10 " /> Male
                  <input type="radio" name="gender" checked={gender === "Female"} onChange={handleGenderChange} value="Female" className="ml-10 " /> Female
                </div></div>

              <button className="ml-24 mt-8 text-white border border-solid text-xl border-white hover:bg-black px-8 py-2 rounded-full">add contact</button>
            </form>

          </div>
          <Logout />
        </div>

      </div>
    </div>
  )
}
