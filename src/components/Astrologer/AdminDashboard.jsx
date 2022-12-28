import React from 'react'
import AstroSidebar from './Sidebar/AstroSidebar'
import './Sidebar/AdminDashboard.css'

const AdminDashboard = () => {
  return(
    <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
        <section class="sidebar md:col-span-1">
            {" "}
            <AstroSidebar />
        </section>
    
        <div className="dashboardContainer">
            <div className="px-4">
                <h1>Dashboard</h1>
                <br />  
                <div className='box grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 p-1'>
                    <div className="bg-blue-500 rounded-md shadow-xl min-h-[130px]">
                        <h2>522</h2>
                        <h3>Astrologers</h3>
                        <i class="fa-solid fa-user icon"></i>
                    </div>
                    <div className="bg-green-500 rounded-md shadow-xl min-h-[130px]">
                        <h2>682</h2>
                        <h3>Users</h3>
                        <i class="fa-solid fa-users icon"></i>
                    </div>
                    <div className="bg-red-400 rounded-md shadow-xl min-h-[130px]">
                        <h2>952</h2>
                        <h3>Services</h3>
                        <i class="fa-solid fa-car icon"></i>
                    </div>
                    <div className="bg-yellow-400 rounded-md shadow-xl min-h-[130px]">
                        <h2>$ 75752</h2>
                        <h3>Amount</h3>
                        <i class="fa-sharp fa-solid fa-chart-pie icon"></i>
                    </div>
                </div>
            </div>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Button
        </button>
    </div>        
)        
}

export default AdminDashboard