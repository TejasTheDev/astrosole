import React from 'react'
import AstroSidebar from './Sidebar/AstroSidebar'
import Aries from '../../images/Aries.png'
import './Sidebar/AdminHoro.css'

const Admin_add_astro = () => {
  return(
    <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
        <section class="sidebar md:col-span-1">
            {" "}
            <AstroSidebar />
        </section>

        <div className="dashboardContainer">
            <div className="container">
                <div class=" p-6 h-[auto] rounded overflow-hidden shadow-lg">
                    <h1 className='relative left-2 m'>Add Astrologer</h1>
                    <div className='line'></div>
        {/*...................... form.................. */}
        <br />
                    <form class="">
                      <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                          Username
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                      </div>
                      <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                          Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                      </div>
                      <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                          Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                          Forgot Password?
                        </a>
                      </div>
                    </form>
                </div>
            </div>
        </div>    
    </div>
)        
}

export default Admin_add_astro