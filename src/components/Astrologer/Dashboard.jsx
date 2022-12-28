import React from 'react'
import AstroSidebar from './Sidebar/AstroSidebar'
import './Sidebar/Dashboard.css'

const Dashboard = () => {
    return (
        <div className=" dashboard parent md:h-screen md:grid md:grid-cols-6">
            <section class="sidebar md:col-span-1">
                {" "}
                <AstroSidebar />
            </section>
        
            <div className="dashboardContainer">
                <div className=" px-4 dashboardSummary grid grid-cols-1">
                    <div className=' rounded-lg min-h-[80px] h-4 font-bold'>
                        <h1 className='bg-color'>Dashboard</h1>
                    </div>
                    <br />  
                    <h1>Namaste You,Ajay Chaubey</h1>
                    <p>Your kundli is ready, You are born on 31/07/1223 04:30AM. Your birth place is Hassan, Kerala, Japan Explore Your Kundli.</p>
                    <br />
                    <h1>About You, ajay Chaubey</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur modi accusantium neque, delectus facilis ratione cupiditate dolorem quisquam reprehenderit temporibus! Vitae velit maxime natus ipsa repellendus voluptatibus nihil laudantium!.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur modi accusantium neque, delectus facilis ratione cupiditate dolorem quisquam reprehenderit temporibus! Vitae velit maxime natus ipsa repellendus voluptatibus nihil laudantium!.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur modi accusantium neque, delectus facilis ratione cupiditate dolorem quisquam reprehenderit temporibus! Vitae velit maxime natus ipsa repellendus voluptatibus nihil laudantium!. </p>
                </div>
                <div className="container">
                    <h1>Kundli based on Personalised predictions</h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-5'>
                        <div className="bg-green-400 rounded-lg shadow-xl min-h-[120px] grid-text">Horoscope Charts</div>
                        <div className="bg-green-400 rounded-lg shadow-xl min-h-[120px] grid-text">Planetary Positions</div>
                        <div className="bg-green-400 rounded-lg shadow-xl min-h-[120px] grid-text">Sarvashtak Details</div>
                    </div>
                </div>
            </div>
        </div>        
    )        
}

export default Dashboard