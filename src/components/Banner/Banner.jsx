import React from 'react';


const Banner = () => {
    return (
        <div className='min-h-screen relative'>


        <div className="hero bg-purple-500 min-h-96 relative rounded-lg">
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Shop Now</button>
                </div>
            </div>
        </div>


        <div className="hero absolute top-[180px] left-0 w-full h-full flex justify-center items-center z-10">
            <div className="hero-content">
                <img
                    src="https://i.ibb.co.com/0MnSc2v/banner.jpg"
                    className="w-72 lg:w-1/2 rounded-lg shadow-2xl" />
            </div>
        </div>

       
    </div>

    );
};

export default Banner;