import React from 'react';
import { useNavigate } from 'react-router';
import notFound from "../../assets/NotFound.png"
import glass from "../../assets/glass.png"

const NotFound = ({message = "Ooops..!! Item Not Found..!!", goto= -1, button="Go Back!" }) => {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col justify-center items-center  my-20 mx-auto '>

            <img src={notFound} className=' md:w-[50%] lg:w-[30%] ' alt="" />
            <div className="orbit-container md:w-[50%] lg:w-[30%] absolute">
                <img src={glass} className='orbiting-object ' alt="" />
            </div>

            <h3 className=''>{message}</h3>
            <button
                onClick={() => navigate(goto)}
                className='text-white btn flex items-center gap-2 bg-linear-to-br text-lg from-secondary to-accent px-10 py-6 rounded-sm border-none transition-all duration-150 ease-in-out  hover:scale-105 relative '>
                {button}
            </button>
        </div>
    );
};

export default NotFound;