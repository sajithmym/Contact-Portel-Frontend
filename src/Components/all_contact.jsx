import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logout from './Logout';

function AllContact() {
  const navigate = useNavigate();
  const array = JSON.parse(localStorage.getItem('twc-test-array'));

  const [code, setCode] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popupCode, setPopupCode] = useState(null);
  const [edit, setEdit] = useState(null);
  const [gender, setGender] = useState(null);

  const goAddPage = () => {
    navigate('/Add');
  };

  useEffect(() => {
    if (!array) {
      navigate('/login');
    }
  }, [navigate, array]);

  const hidePopup = () => {
    setPopup(false);
    setPopupCode(null);
  };

  const refresh = () => {
    window.location.href = '';
  };

  const deleteOne = (id, name) => {
    axios
      .post('http://127.0.0.1:8010/delete', {
        id: id,
      })
      .then(() => {
        setPopupCode(
          <div className="text-xl text-cus font-bold">
            <center>
              <h1>{`Your contact "${name}" has been deleted successfully!`}</h1>
            </center>
            <div className="mt-4">
              <center>
                <button
                  onClick={refresh}
                  className="text-cus bg-white p-2 rounded-3xl px-4 border-cus border hover:bg-green-100"
                >
                  Okay
                </button>
              </center>
            </div>
          </div>
        );
        setEdit(null);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };

  const deleteRecord = (id, name) => {
    setPopup(true);
    setPopupCode(
      <div className="text-xl text-cus font-bold">
        <center>
          <h1>{`Do you want to delete the contact "${name}"?`}</h1>
        </center>
        <div className="mt-4">
          <center>
            <button
              onClick={() => deleteOne(id, name)}
              className="text-white bg-custom mr-5 p-2 rounded-3xl px-4 hover:bg-black"
            >
              Okay
            </button>
            <button
              onClick={hidePopup}
              className="text-cus bg-white ml-5 p-2 rounded-3xl px-4 border-cus border hover:bg-green-100"
            >
              Cancel
            </button>
          </center>
        </div>
      </div>
    );
  };

  const toggleGender = () => {
    if (gender === 'Male') {
      setGender('Female');
    } else {
      setGender('Male');
    }
  };

  const Update_Row = (ele) => {
    console.log(ele);
  }

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8010/get/${array[1]}`)
      .then((res) => {
        const data = res.data.rec;

        if (data.length === 0) {
          setCode(
            <div id="nodata">
              No Record Found
            </div>
          );
        } else {
          const allRecords = data.map((record, number) => (
            <tr className="mt-5" key={number}>
              {number !== edit ? (
                <>
                  {record.gender === 'Female' && (
                    <td className="p-1">
                      <img className="h-8 w-8" src="/female.png" alt="female" />
                    </td>
                  )}
                  {record.gender === 'Male' && (
                    <td className="p-1">
                      <img className="h-8 w-8" src="/male.png" alt="male" />
                    </td>
                  )}
                  <td className="p-2">{record.name}</td>
                  <td className="p-2">{record.gender}</td>
                  <td className="p-2">{record.email}</td>
                  <td className="p-2">{record.mobile}</td>
                  <td className="p-0 hover:cursor-pointer" onClick={() => { setEdit(number); setGender(record.gender); }}>
                    <box-icon type="solid" name="pencil"></box-icon>
                  </td>
                  <td className="p-0 hover:cursor-pointer" onClick={() => deleteRecord(record._id, record.name)}>
                    <box-icon type="solid" name="trash"></box-icon>
                  </td>
                </>
              ) : (
                <>
                  {gender === 'Female' && (
                    <td className="p-0">
                      <img className="h-8 w-8" src="/female.png" alt="female" />
                    </td>
                  )}
                  {gender === 'Male' && (
                    <td className="p-1">
                      <img className="h-8 w-8" src="/male.png" alt="male" />
                    </td>
                  )}
                  <td className="p-2 border border-cus bg-green-100" contentEditable='true'>{record.name}</td>
                  <td className="p-2 border border-cus bg-green-100" onClick={toggleGender}>{gender} 
                  <i onClick={toggleGender} className='bx bx-refresh ml-2 text-xl hover:text-red-900 font-bold'></i></td>
                  <td className="p-2 border border-cus bg-green-100" contentEditable='true'>{record.email}</td>
                  <td className="p-2 border border-cus bg-green-100" contentEditable='true'>{record.mobile}</td>
                  <td className="p-1 hover:cursor-pointer" colSpan={2}>
                    <button className='bg-cus text-white hover:bg-black text-xl p-1 px-2 rounded-full' onClick={() => Update_Row(this)}>save</button>
                  </td>
                </>
              )}
            </tr>
          ));
          setCode(allRecords);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [edit,gender]);

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

          <div className="flex mt-12 ml-52 mr-48">
            <h1 className="text-white text-4xl font-bold">Contacts</h1>
            <button
              onClick={goAddPage}
              className="ml-auto text-white border border-solid text-xl border-white hover:bg-black px-8 py-2 rounded-full"
            >
              Add New Contact
            </button>
          </div>

          <div className="mt-5 ml-52 mr-48 bg-white rounded-b_r p-5 h-52 overflow-auto">
            <table className="border-collapse w-full">
              <thead>
                <tr>
                  <td className="p-2 font-medium"></td>
                  <td className="p-2 font-medium">full Name</td>
                  <td className="p-2 font-medium">gender</td>
                  <td className="p-2 font-medium">e-mail</td>
                  <td className="p-2 font-medium">phone Number</td>
                  <td className="p-2 font-medium"></td>
                  <td className="p-2 font-medium"></td>
                </tr>
              </thead>
              <tbody>{code}</tbody>
            </table>
          </div>
          <Logout />
        </div>
      </div>

      {popup && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50">
          <div className="absolute inset-0 backdrop-filter backdrop-blur-lg bg-black opacity-80"></div>
          <div className="relative z-10 p-8 bg-white h-1/4 w-7/12 rounded-3xl ">
            {popupCode}
          </div>
        </div>
      )}
    </div>
  );
}

export default AllContact;
