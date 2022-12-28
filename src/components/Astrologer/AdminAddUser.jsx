import React from 'react'
import AstroSidebar from './Sidebar/AstroSidebar'
// import Aries from '../../images/Aries.png'
import './Sidebar/AdminHoro.css'

const AdminAddUser = () => {
  return(
    <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
        <section class="sidebar md:col-span-1">
            {" "}
            <AstroSidebar />
        </section>

        <div className="dashboardContainer">
            <div className="px-4">
                <div class=" p-6 h-[auto] rounded overflow-hidden shadow-lg">
                    <h1 className='relative left-2 m'>Add User</h1>
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
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
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
                        <label for="floatingInput" class="block text-gray-700 text-sm font-bold mb-2">Time of Birth</label>
                          <input type="time"
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline relative"
                          placeholder="Time of Birth" />
                        </div>
                      </div>
                      <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Age
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" placeholder="Enter Age"/>
                      </div>
                      <div class="mb-4">
                        <div class="timepicker relative form-floating mb-3 xl:w-full"> 
                        <label for="floatingInput" class="block text-gray-700 text-sm font-bold mb-2">Zodiac Sign</label>
                          <input type="text"
                          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline relative"
                          placeholder="Enter Zodiac Sign" />
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
                      <div class="mb-6">
                      <p class="mt-1 text-md text-gray-500 dark:text-gray-300" id="file_input_help">
                        Users Image ( File must be in PNG | JPG | JPEG and Recommended image size is 200px x 200px )</p>
                        <label class="block mb-2 text-sm font-medium t  ext-gray-900 dark:text-white" for="file_input">Upload Image</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" aria-describedby="file_input_help" id="file_input" type="file"/>
                      </div>
                      <div class="mb-6">
                      </div>
                      <div class="mb-6">
                        <div class="form-check">
                         <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/>
                         <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                            Active
                         </label>
                        </div>
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
                    <div className="grid grid-cols-12 gap-4">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Save
                        </button>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>    
    </div>
)        
}

export default AdminAddUser