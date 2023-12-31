import React  from "react";
import Typed from "react-typed";

const Hero = () => {
    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">
                    {/* Growing with automation */}
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3">
                    Automate your Life with us
                </h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl fond-bold py-4">
                        Automate your 
                    </p>
                    <Typed
                        className="md:text-5xl sm:text-4xl text-xl fond-bold md:pl-4 pl-2"
                        strings={["Emails", "Bumble", "Instagram"]}
                        typeSpeed={50}
                        backSpeed={50}
                        loop
                        />
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500 ">
                    We provide various automations for a varity of tasks...
                </p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-lg">
                    Get started
                </button>
            </div>
        </div>
    )
}

export default Hero;