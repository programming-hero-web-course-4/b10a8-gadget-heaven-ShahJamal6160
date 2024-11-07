import React from 'react';

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-5xl">Page Not Found</h2>
            <br />
            <p>Status: 404</p>
            <button className="btn"><NavLink to="/">Back Home</NavLink></button>
        </div>
    );
};

export default ErrorPage;