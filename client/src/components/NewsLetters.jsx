import React  from "react";

const NewsLetter = () => {
    return(
        <div className="text-white w-full py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
                        Feedback 
                    </h1>
                    <p className="md:text-1.5xl sm:text-0.5xl text-0.25xl ">
                        If you have any suggestions or feedback, feel free to just type a message here, we will look into it.
                    </p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input className='p-3 flex w-full rounded-md text-black'
                            type='email'
                            placeholder='Type your message here' />
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                            Submit
                        </button>
                    </div>
                    <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;