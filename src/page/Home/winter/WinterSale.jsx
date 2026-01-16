import React from 'react';
import img from '../../../assets/women/women2.jpg'
import Animation from '../Home/animation/Animation';
import Features from '../Home/animation/Animation';

const WinterSale = () => {
    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={img}
                    className="max-w-sm rounded-lg shadow-2xl transition-transform duration-300
hover:rotate-2 hover:scale-105 "
                />
                <div >
                    <h1 className="text-5xl font-bold">Winter Sale Upto 50% off</h1>
                    <p className="py-6">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, inventore!
                    </p>
                    <Features></Features>
                    
                </div>
            </div>
        </div>
    );
};

export default WinterSale;