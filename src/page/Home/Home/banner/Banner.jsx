import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../../assets/hero/sale.png';
import img2 from '../../../../assets/hero/shopping.png';
import img3 from '../../../../assets/hero/women.png';
import { Carousel } from 'react-responsive-carousel';



const Banner = () => {
    return (
        <div className='h-[400px] mb-20 '>
            <div className="carousel ">
                <div className='w-full  mx-auto flex p-24 '>
                    <div className='items-center  p-5 mt-8 space-y-2 flex-1' >
                        <div>
                            <h2 className='text-5xl'>Upto 50% off on <br /> all Mans Wear</h2>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum soluta quae <br /> ullam ipsum atque eos?</p>
                        <button className='bg-amber-300 rounded-2xl p-2 text-white '>Order Now</button>
                    </div>
                    {/* 1st slide */}
                    <div>
                         <div id="slide1" className="carousel-item relative flex-1 ">
                        <img className='h-[400px] w-[500px]'
                            src={img3}
                            
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between ">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    
                    </div>
                   
                </div>

                {/* slide 2 */}
                

                {/* <div id="slide2" className="carousel-item relative w-[500px] h-[300px]">
                    <img
                        src={img2}
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-[500px] h-[300px]">
                    <img
                        src={img3}
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div> */}
                {/* </div> */}

            </div>
        </div>
    );
};

export default Banner;