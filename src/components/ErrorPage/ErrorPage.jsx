import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 mt-10'>
            <h2 className="text-5xl">Page Not Found</h2>
            <br />
            <p>Status: 404</p>
            <button className="btn"><NavLink to="/">Back Home</NavLink></button>
        </div>
    );
};

export default ErrorPage;