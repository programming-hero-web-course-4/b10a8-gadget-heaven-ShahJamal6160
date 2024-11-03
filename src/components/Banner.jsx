import React from 'react';
import BannerImg from '../assets/Images/banner.jpg'

const Banner = () => {
    return (


        <div className='min-h-screen'>
            <div className=" hero top-[550px] right-[-2px] ">
                <div className="hero-content">
                    <img
                        src={BannerImg}
                        className="w-72 lg:w-1/2 rounded-lg shadow-2xl" />

                </div>
            </div>


            <div className=" hero bg-purple-500 min-h-screen">
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


        </div>
    );
};

export default Banner;