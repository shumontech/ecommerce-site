import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Banner from './banner/Banner';
import TopSell from './topsell/TopSell';


const Home = () => {
    return (
        <div>
          
           <Banner></Banner>
           <TopSell></TopSell>
           
        </div>
    );
};

export default Home;