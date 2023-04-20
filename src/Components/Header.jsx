import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between text-white items-center h-20 bg-gray-800 px-20'>
                <h1>digital shope</h1>
                <ul className='flex gap-5'>
                    <Link to="/">Home</Link>
                    <Link to="/Login">Login</Link>
                    <Link to="/Register">Register</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;