import React from 'react'
import AstroSidebar from './Sidebar/AstroSidebar'
import Aries from '../../images/Aries.png'
import './Sidebar/AdminHoro.css'

const Admin_add_user = () => {
  return(
    <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
        <section class="sidebar md:col-span-1">
            {" "}
            <AstroSidebar />
        </section>

        <div className="dashboardContainer">
            <div className="px-4">
                <div class=" p-6 h-[auto] rounded overflow-hidden shadow-lg">
                    <h1 className='relative left-2 m'>Add Astrologer</h1>
                    <div className='line'></div>
        {/*...................... form.................. */}
        <br />
                    <form class="grid lg:grid-cols-2 sm:grid-cols-1 gap-3">
                      <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                          Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                      </div>
                      <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                          Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                      </div>
                      <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                          Mobile No.
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Username"/>
                      </div>
                      <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                          Password
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="password" placeholder="Username"/>
                      </div>
                      <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                          Gender
                        </label>
                        <div class="mb-3 xl:w-full">
                          <select class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-label="Default select example">
                              <option selected>Select</option>
                              <option value="1">Male</option>
                              <option value="2">Female</option>
                              <option value="3">Other</option>
                          </select>
                        </div>
                      </div>
                      <div class="mb-6">
                        <div class="datepicker relative form-floating mb-3 xl:w-full" data-mdb-toggle-button="false">
                          <label for="floatingInput" class="block text-gray-700 text-sm font-bold mb-2">Date of Birth</label>
                          <input type="date"class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline relative"
                          placeholder="dd-mm-yyyy" data-mdb-toggle="datepicker" />  
                        </div>
                      </div>
                      <div class="mb-4">
                        <div class="timepicker relative form-floating mb-3 xl:w-full"> 
                        <label for="floatingInput" class="block text-gray-700 text-sm font-bold mb-2">Astrologer Language</label>
                          <input type="text"
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline relative"
                          placeholder="Astrologer Language" />
                        </div>
                      </div>
                      <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Astrologer Category
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Astrologer Category"/>
                      </div>
                      <div class="mb-4">
                        <div class="timepicker relative form-floating mb-3 xl:w-full"> 
                        <label for="floatingInput" class="block text-gray-700 text-sm font-bold mb-2">Experience ( Years )</label>
                          <input type="number"
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline relative"
                          placeholder="Experence" />
                        </div>
                      </div>
                      <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Address
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Address"/>
                      </div>
                      <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Country
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Select Country"/>
                      </div>
                      <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        State
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Select State"/>
                      </div>
                      <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        City
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Select Country"/>
                      </div>
                      <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Pincode
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Enter Pincode"/>
                      </div>
                     
                      {/* <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                          Sign In
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                          Forgot Password?
                        </a>
                      </div> */}
                    </form>
                </div>
            </div>
        </div>    
    </div>
)        
}

export default Admin_add_user