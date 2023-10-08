import React from "react";
import aboutmePic from "../assets/aboutmePic1.jpeg";


const Analystics = () => {
    return(
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-1240px mx-auto grid md:grid-cols-2">
                <img className='w-[500px] mx-auto my-4'
                src={aboutmePic} alt="/" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">DashBoard of your life</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Manage Your Life with us
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur 
                        facilis magnam nam aliquam sequi distinctio, ipsum exercitationem, 
                        harum repellat, minus earum molestiae fuga consectetur commodi eaque 
                        rerum illo veritatis quisquam.
                    </p>
                    <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">
                        Get started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Analystics;
