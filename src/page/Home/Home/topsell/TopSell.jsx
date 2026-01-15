import React from 'react';
import img1 from '../../../../assets/women/women.png';
import img2 from '../../../../assets/women/women2.jpg';
import img3 from '../../../../assets/women/women3.jpg';
import img4 from '../../../../assets/women/women4.jpg';
import img5 from '../../../../assets/women/women2.jpg';

const TopSell = () => {
    return (
        
       
<div>
    <div className='gap-3 mb-10'>
        <h2 className='text-3xl font-bold text-center mb-10'>Top Selling Products</h2>
        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, aut.</p>
    </div>
<div className='w-full flex justify-around mb-20 gap-5'>
            <div className="hover-3d ">
                {/* content */}
                <figure className="w-60 rounded-2xl">
                    <img src={img1} alt="Tailwind CSS 3D card" />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <h5 className='text-end'>Women Ethnic</h5>
            </div>

            <div className="hover-3d">
                {/* content */}
                <figure className="w-60 rounded-2xl">
                    <img src={img2} alt="Tailwind CSS 3D hover" />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <h5 className='text-end'>Women Western</h5>
            </div>

            <div className="hover-3d">
                {/* content */}
                <figure className="w-60 rounded-2xl">
                    <img src={img3} alt="Tailwind CSS 3D hover" />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <h5 className='text-end'>Women Goggles</h5>
            </div>

            <div className="hover-3d">
                {/* content */}
                <figure className="w-60 rounded-2xl">
                    <img src={img4} alt="Tailwind CSS 3D hover" />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <h5 className='text-end'>Printed Shirt</h5>
            </div>

            <div className="hover-3d">
                {/* content */}
                <figure className="w-60 rounded-2xl">
                    <img src={img5} alt="Tailwind CSS 3D hover" />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <h5 className='text-end'>Printed T-shirt</h5>
            </div>

        </div>
</div>
        
    );
};

export default TopSell;