import React from "react";
import image1 from '../assets/email.png';
import image2 from '../assets/instagram.webp';
import image3 from '../assets/bumble.jfif'; 

const Services = () => {
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-1240px mx-auto grid md:grid-cols-2">
                <div className='w-1/2 shadow-xl flex flex-col mx-40 p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={image1} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Email</h2>
                    <p className='text-center text-4xl font-bold'>142$</p>
                    <div  className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Send email in Bulk</p>
                        <p className='py-2 border-b mx-8'>Schedule an email</p>    
                        <p className='py-2 border-b mx-8'>Send upto 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300'>Start Trial</button>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">
                        {/* DashBoard of your life */}
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Email automation services 
                    </h1>
                    <p className="">
                        Our website provides a wide varity of email automation services, some of them are sending email in bulk,
                        Scheduling emails for a specific time, we also suggest formats for all kinds of email that you wanna write.
                        Click the button below and take a look to our services.
                    </p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] hover:scale-105 duration-300">
                        Get started
                    </button>
                </div>
            </div>
            <div className="max-w-1240px mx-20 grid md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">
                        {/* DashBoard of your life */}
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Instagram automation services
                    </h1>
                    <p>
                        Our website provides services with which you 
                    </p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] hover:scale-105 duration-300'">
                        Get started
                    </button>
                </div>
                <div className='w-1/2 shadow-xl flex flex-col mx-60 p-4 my-40 rounded-lg hover:scale-105 duration-300'>
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={image2} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Instagram</h2>
                    <p className='text-center text-4xl font-bold'>142$</p>
                    <div  className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Schedule Posts</p>
                        <p className='py-2 border-b mx-8'>Auto like</p>
                        <p className='py-2 border-b mx-8'>Search popluar hastags</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300'>Start Trial</button>
                </div>
            </div>
            <div className="max-w-1240px mx-auto grid md:grid-cols-2">
                <div className='w-1/2 shadow-xl flex flex-col mx-40 p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={image3} alt="/" />
                    <h2 className='text-2xl font-bold text-center py-8'>Bumble</h2>
                    <p className='text-center text-4xl font-bold'>142$</p>
                    <div  className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Send email in Bulk</p>
                        <p className='py-2 border-b mx-8'>Schedule an email</p>    
                        <p className='py-2 border-b mx-8'>Send upto 2 GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 hover:scale-105 duration-300'>Start Trial</button>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">DashBoard of your life</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Manage Your Life
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur 
                        facilis magnam nam aliquam sequi distinctio, ipsum exercitationem, 
                        harum repellat, minus earum molestiae fuga consectetur commodi eaque 
                        rerum illo veritatis quisquam.
                    </p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a] hover:scale-105 duration-300'">
                        Get started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Services;