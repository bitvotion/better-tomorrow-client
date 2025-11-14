import React from 'react';
import img from '../../assets/404.svg'

const Error404 = () => {

    return (
        <div className='flex flex-col justify-center items-center mx-auto '>
            <title>Error 404..!!</title>
            <img className='object-fit max-h-screen' src={img} alt="" />
        </div>
    );
};

export default Error404;