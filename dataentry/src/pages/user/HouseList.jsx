import React from 'react'
import Layout from "../../components/layout/Layout"
import NavHeader from '../../components/layout/NavHeader'
import { useNavigate } from 'react-router-dom'

const HouseList = () => {

    const navigate = useNavigate();

    const handleNavigateToAddHouse = () => {
      navigate('/addhouse'); // Replace '/adduser' with the actual path to your Add User page
    };

    return (
        <Layout>
            <NavHeader navigateToAddHouse={handleNavigateToAddHouse} />
    <div className="p-3 my-8 overflow-hidden">
    <h2 className="font-bold text-2xl">House List</h2>
    <p className="text-slate-500 font-normal">Here is a list of house</p>
          <div className="overflow-x-auto">
          <table className="min-w-full text-center text-sm font-light mt-8 overflow-x-auto table-auto">
        <thead className="font-medium bg-blue text-slate-100 ">
            <tr>
                <th scope="col" className="px-6 py-4">
                    #
                </th>
                <th scope="col" className="px-6 py-4">
                    House Adress
                </th>
                <th scope="col" className="px-6 py-4">
                    AGWA
                </th>
              
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                <td className="whitespace-nowrap px-6 py-4">Ladipo street penthoude lugbe</td>
                <td className="whitespace-nowrap px-6 py-4">galadimawa</td>
                         
                      </tr>
                      

           <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                <td className="whitespace-nowrap px-6 py-4">ayo ekiti</td>
                <td className="whitespace-nowrap px-6 py-4">mitaima</td>
                        
            </tr>
            <tr>
                <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                <td className="whitespace-nowrap px-6 py-4">Airport Road</td>
                <td className="whitespace-nowrap px-6 py-4">Narsda</td>
                        
            </tr>
            
        </tbody>
    </table>       
</div>

            </div>
            </Layout>
  )
}

export default HouseList
