import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Banner from './banner/Banner';
import TopSell from './topsell/TopSell';
import Trending from './trending/Trending';
import WinterSale from '../winter/WinterSale';
import Testimonials from '../testimonials/Testimonials';
import TopSellCarousel from './topsell/TopSell';


const Home = () => {
    return (
        <div>
          
           <Banner></Banner>
           <TopSellCarousel></TopSellCarousel>
           <Trending></Trending>
           <WinterSale></WinterSale>
           <Testimonials></Testimonials>
           
        </div>
    );
};

export default Home;