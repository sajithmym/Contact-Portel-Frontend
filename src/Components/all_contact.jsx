import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AllContact() {
  const navigate_var = useNavigate()
  const array = JSON.parse(localStorage.getItem("twc-test-array"));

  const [code, setCode] = useState(<div></div>)
  const [popup, setPopup] = useState(false)
  const [popup_code, setPopup_code] = useState(<div></div>)

  const go_Add_page = () => {
    navigate_var('/Add')
  }

  useEffect(() => {
    if (!array) {
      navigate_var('/login');
    }
  }, []);

  const hidePopup = () => {
    setPopup(false)
  }

  const Refresh = () => {
    window.location.href = ''
  }

  const Delete_one = (id) => {
    axios.post(`http://127.0.0.1:8010/delete`, {
      id: id
    })
      .then(() => {
        // window.location.href = ''
        setPopup_code(
          <div className="text-xl text-cus font-bold">
            <center><h1>{`Your contact has been deleted successfully!`}</h1></center>
            <div className="mt-4">
              <center>
                <button onClick={() => Refresh()} className='text-cus bg-white p-2 rounded-3xl px-4 border-cus border hover:bg-green-100'>Okay</button>
              </center>
            </div>
          </div>
        )
      })
  }

  let delete_reecord = (id, name) => {
    setPopup(true)
    setPopup_code(
      <div className="text-xl text-cus font-bold">
        <center><h1>{`Do you want to delete the contact "${name}"?`}</h1></center>
        <div className="mt-4">
          <center>
            <button onClick={() => Delete_one(`${id}`)} className='text-white bg-custom mr-5 p-2 rounded-3xl px-4 hover:bg-black'>Okay</button>
            <button onClick={() => hidePopup()} className='text-cus bg-white ml-5 p-2 rounded-3xl px-4 border-cus border hover:bg-green-100'>Cancel</button>
          </center>
        </div>
      </div>
    )
  }

  useEffect(() => {
    axios.get(`http://127.0.0.1:8010/get/${array[1]}`).then((res) => {

      let data = res.data.rec;

      if (data.length === 0) {
        setCode(
          <div id="nodata">
            No Record Found
          </div>)
      } else {
        const allRecords = data.map((record, number) => (
          <tr className='mt-5' key={number}>
            {(record.gender === "Female") && <td className="p-2"><img className='h-8 w-8' src="/female.png" alt="female" /></td>}
            {(record.gender === "Male") && <td className="p-2"><img className='h-8 w-8' src="/male.png" alt="male" /></td>}
            <td className="p-2">{record.name}</td>
            <td className="p-2">{record.gender}</td>
            <td className="p-2">{record.email}</td>
            <td className="p-2">{record.mobile}</td>
            <td className="p-2 hover:cursor-pointer"><box-icon type='solid' name='pencil'></box-icon></td>
            <td className="p-2 hover:cursor-pointer" onClick={() => delete_reecord(`${record._id}`, `${record.name}`)}><box-icon type='solid' name='trash'></box-icon></td>
          </tr>
        ));
        setCode(allRecords);
      }
    })

  }, [])

  return (
    <div>
      <div className="flex bg-custom-bg bg-no-repeat h-screen backdrop-blur-lg overflow-hidden">
        <div className="w-screen bg-custom rounded-cust">
          <div className="ml-24 mt-16">
            <div className="mt-10 ml-28 flex">
              <img className="w-8 h-8 mt-1" src="/public/icon_2.png" alt="icon" />
              <div className="text-white text-2xl font-bold mb-2">twc</div>
            </div>

            <div className="text-white ml-28 text-xl font-bold">Contacts</div>
            <div className="text-white ml-28 mt-2 text-xl font-normal">Portal</div>
          </div>

          <div className="flex mt-7 ml-52 mr-48">
            <h1 className="text-white text-4xl font-bold">Contacts</h1>
            <button onClick={() => go_Add_page()} className="ml-auto text-white border border-solid text-xl border-white hover:bg-black px-8 py-2 rounded-full">add new contact</button>
          </div>

          <div className="mt-5 ml-52 mr-48 bg-white rounded-b_r p-5 h-56 overflow-auto">

            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <td className="p-2 font-medium"></td>
                  <td className="p-2 font-medium">full Name</td>
                  <td className="p-2 font-medium">gender</td>
                  <td className="p-2 font-medium">e-mail</td>
                  <td className="p-2 font-medium">phone number</td>
                  <td className="p-2 font-medium"></td>
                  <td className="p-2 font-medium"></td>
                </tr>
              </thead>
              <tbody>
                {code}
              </tbody>
            </table>
          </div>
          <Logout />
        </div>
      </div>

      {popup && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div className="absolute inset-0 backdrop-filter backdrop-blur-lg bg-black opacity-80"></div>
          <div className="relative z-10 p-8 bg-white h-1/4 w-7/12 rounded-3xl ">
            {popup_code}
          </div>
        </div>
      )}


    </div>
  );
}
