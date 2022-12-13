import React from 'react'
import AstroSidebar from './Sidebar/AstroSidebar'
import './Sidebar/Basicdetails.css'

const BasicDetails = () => {
  return (
    <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
        <section class="sidebar md:col-span-1">
            {" "}
            <AstroSidebar />
        </section>
    
        <div className="dashboardContainer">
            
            <div className="container">
                <h1>Basic Details</h1>
                <br />
                <div className="line"></div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5'>
                    <div className="heading">
                      <h2>Birth Details</h2> 
                      <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                              <table class="min-w-full border text-center">
                                <tbody>
                                  <tr class="border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Name
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      Ajay Chaubey
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      DOB
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      31/07/1987
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Time of Birth
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      04:30AM
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Place
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      Kundrapur, Japan
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Latitude
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      25'44'554'245°N
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Langitude
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      82'411'1332°E
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Timezone
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      5.5
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading">
                      <h2>Panchang Details</h2> 
                      <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                              <table class="min-w-full border text-center">
                                <tbody>
                                  <tr class="border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Day
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      Saturday
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Tithi
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      Shukla Ekadhashi
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Kakshathra
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      Swathi
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Yoga
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      Brahma
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Karna
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      Vanija
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Sunrise
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      06:24:43
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Sunset
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      18:48:13
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Vedic Sunrise 
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      06:28:42
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Vedic Sunset
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      18:42:13
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="heading">
                     <h2>Astro Details</h2> 
                      <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
                            <div class="overflow-hidden">
                              <table class="min-w-full border text-center">
                                <tbody>
                                  <tr class="border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Varna
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      Vipra                                    
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      vaishya
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      Priests
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Yoni
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      Mrig
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Can
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      Rakshasa
                                    </td>
                                  </tr>
                                  <tr class="bg-white border-b">
                                    <td class="text-base text-gray-900 font-bold px-6 py-4 text-left whitespace-nowrap border-r">
                                      Paya
                                    </td>
                                    <td class="text-base text-gray-900 font-medium px-6 py-4 text-left whitespace-nowrap">
                                      Copper
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>        
)        
}

export default BasicDetails