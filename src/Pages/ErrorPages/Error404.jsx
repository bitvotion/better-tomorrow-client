import React from 'react';
import { useNavigate } from 'react-router';
import left4 from "../../assets/left4.png"
import mid0 from "../../assets/0.png"
import right4 from "../../assets/right4.png"
import robo from "../../assets/robot.png"

const Error404 = () => {

    const navigate = useNavigate()

    return (
        <div className='flex flex-col justify-center items-center  my-20 mx-auto '>
            <title>Error 404..!!</title>
            <div className=' md:w-[90%] lg:w-[60%] relative flex justify-center items-center scale-50'>
                <div className='flex justify-center relative '>
                    <img data-aos="slide-up" className='absolute w-1/2 lg:w-full left-80 sm:left-100 md:left-125' src={right4} alt="" />
                    <img data-aos="fade-up" className='w-1/2 lg:w-full' src={mid0} alt="" />
                    <img data-aos="slide-down" className='absolute w-1/2 lg:w-full right-80 sm:right-100 md:right-125' src={left4} alt="" />
                </div>
                <img data-aos="slide-down" className='absolute w-full -top-20 sm:-top-30 lg:-top-40 ' src={robo} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h4  className='text-center text-3xl md:7xl font-bold mb-4'>Ooops..!! Page Not Found..!!</h4>
            <button
                data-aos="zoom-in"
                onClick={() => navigate(-1)}
                className='text-white btn w-1/2 flex items-center gap-2 bg-linear-to-br text-lg from-secondary to-accent px-10 py-6 rounded-sm border-none transition-all duration-150 ease-in-out  hover:scale-105 relative '>
                Go Back!
            </button>
            </div>
        </div>
    );
};

export default Error404;