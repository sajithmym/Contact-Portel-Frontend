import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function AllContact() {
  const navigate_var = useNavigate()
  const array = JSON.parse(localStorage.getItem("twc-test-array"));

  const [code, setCode] = useState(<div></div>)

  const go_Add_page = () => {
    navigate_var('/Add')
  }

  useEffect(() => {
    if (!array) {
      navigate_var('/login');
    }
  }, []);

  let delete_reecord = (id) => {
    //-----------------------------------------------
    const answer = confirm("Are you sure you want to do that?");

    if (answer) {
      axios.post(`http://127.0.0.1:8010/delete`, {
        id: id
      })
        .then(() => {
          window.location.href = ''
        })
    }
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
            {(record.gender === "Female") && <td className="p-2"><img className='h-10 w-10' src="/female.png" alt="female" /></td>}
            {(record.gender === "Male") && <td className="p-2"><img className='h-10 w-10' src="/male.png" alt="male" /></td>}
            <td className="p-2">{record.name}</td>
            <td className="p-2">{record.gender}</td>
            <td className="p-2">{record.email}</td>
            <td className="p-2">{record.mobile}</td>
            <td className="p-2 hover:cursor-pointer"><box-icon type='solid' name='pencil'></box-icon></td>
            <td className="p-2 hover:cursor-pointer" onClick={() => delete_reecord(`${record._id}`)}><box-icon type='solid' name='trash'></box-icon></td>
          </tr>
        ));
        setCode(allRecords);
      }
    }) 

  }, [])

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
  );
}
