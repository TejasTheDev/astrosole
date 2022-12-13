import React from 'react'
import AstroSidebar from './Sidebar/AstroSidebar'

import './Sidebar/Dailyhoroscope.css'
const Dailyhoroscope = () => {
  return (
<div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
    <section class="sidebar md:col-span-1">
        {" "}
        <AstroSidebar />
    </section>

    <div className="dashboardContainer">
        <h1>DAILY HOROSCOPE</h1>
        <div className=" container dashboardSummary grid grid-cols-2 gap-5">
            <div className='rounded-lg shadow-xl min-h-[100px]'>
                <h1 className='font-bold '>Today Predication</h1>
                {/* <div className='date-sign grid'>
                    <h3>Date</h3>
                    <h3>Sign</h3>
                </div>
                <div className='date-sign flex'>
                    <h3>28/10/2002</h3>
                    <h3>leo</h3>
                </div> */}

                <h2>Personal Life</h2>
                <p className='matter'>
                    Simple Leo good around wild libra and pisose signs. If you are in a relationship. You can do that commitmemt to each  other is getting more serious and that your communication is getting better.
                </p>
                <h2>Profession</h2>
                <p className='matter'>
                    It is very likely that finanial success will come soon. Jopana hudgirindha Kochthare ninge. Dhud kali agatthe. Kelsake madudhru dhud kodalla.  
                </p>
                <h2>Travel</h2>
                <p className='matter'>
                    It is very likely that finanial success will come soon. Jopana hudgirindha Kochthare ninge. Dhud kali agatthe. Kelsake madudhru dhud kodalla.  
                </p>
                <h2>Luck</h2>
                <p className='matter'>
                    It is very likely that finanial success will come soon. Jopana hudgirindha Kochthare ninge. Dhud kali agatthe. Kelsake madudhru dhud kodalla.  
                </p>
                <h2>Health</h2>
                <p className='matter'>
                    It is very likely that finanial success will come soon. Jopana hudgirindha Kochthare ninge. Dhud kali agatthe. Kelsake madudhru dhud kodalla.  
                </p>
            </div>
            <div className='rounded-lg shadow-xl min-h-[100px] h-4 font-bold'>
                <h2> Rudhraksha Suggetions</h2>
                <h2> Name</h2>
                <h2> Recomendation</h2>
            </div>
            <div className='rounded-lg shadow-xl min-h-[100px] h-4 font-bold table-right-pos'>
                <h1>Basic Panchang</h1>
                <div class="flex flex-col">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden">
                        <table class="min-w-full">

                          <tbody>
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Date
                              </td>
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Friday
                              </td>
                            </tr>
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Tithi
                              </td>
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Shukla Tritiya
                              </td>
                            </tr>
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Nakshatra
                              </td>
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Anuradha
                              </td>
                            </tr>
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Yog
                              </td>
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Soubhgya
                              </td>
                            </tr>
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Karna
                              </td>
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Gaya
                              </td>
                            </tr>
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Sunrise
                              </td>
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                06:30:04
                              </td>
                            </tr>
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Sunset
                              </td>
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                17:39:29
                              </td>
                            </tr>
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Vedic Sunrise
                              </td>
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                06:34:02
                              </td>
                            </tr>
                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                Vedic Sunset
                              </td>
                              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                17:35:30
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
        
    )
}

export default Dailyhoroscope