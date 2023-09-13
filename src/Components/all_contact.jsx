import { useNavigate } from 'react-router-dom';
import Logout from './Logout';
import { useEffect } from 'react';

export default function AllContact() {
  const navigate_var = useNavigate()
  const array = JSON.parse(localStorage.getItem("twc-test-array"));

  const go_Add_page = () => {
    navigate_var('/contacts/new')
  }

  useEffect(() => {
    if (!array) {
      navigate_var('/login');
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
              <tr className='mt-5'>
                <td className="p-2"><box-icon name='male-sign'></box-icon></td>
                <td className="p-2">John Doe</td>
                <td className="p-2">Male</td>
                <td className="p-2">johndoe@example.com</td>
                <td className="p-2">123-456-7890</td>
                <td className="p-2"><box-icon type='solid' name='pencil'></box-icon></td>
                <td className="p-2"><box-icon name='trash'></box-icon></td>
              </tr>

              <tr className='mt-5'>
                <td className="p-2"><box-icon name='female-sign'></box-icon></td>
                <td className="p-2">Jane Smith</td>
                <td className="p-2">Female</td>
                <td className="p-2">janesmith@example.com</td>
                <td className="p-2">987-654-3210</td>
                <td className="p-2"><box-icon type='solid' name='pencil'></box-icon></td>
                <td className="p-2"><box-icon name='trash'></box-icon></td>
              </tr>
              
              <tr className='mt-5'>
                <td className="p-2"><box-icon name='female-sign'></box-icon></td>
                <td className="p-2">Jane Smith</td>
                <td className="p-2">Female</td>
                <td className="p-2">janesmith@example.com</td>
                <td className="p-2">987-654-3210</td>
                <td className="p-2"><box-icon type='solid' name='pencil'></box-icon></td>
                <td className="p-2"><box-icon name='trash'></box-icon></td>
              </tr>

            </tbody>
          </table>

        </div>

        <Logout/>

      </div>
    </div>
  );
}
