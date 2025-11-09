import React from 'react';
import ThemeSwitcher from '../../Components/ThemeSwitcher/ThemeSwitcher';

const Home = () => {
    return (
        <div>
            Home Page
            <button className='btn btn-primary mr-5'>Primary</button>
            <button className='btn btn-secondary'>Secondary</button>
            <ThemeSwitcher></ThemeSwitcher>
        </div>
    );
};

export default Home;