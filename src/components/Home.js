import React, { Component } from 'react';
import NavSection from './NavSection';
import SlideImages from './SlideImages';
import Buttons from './Buttons';
import Collection from './Collection';
import CollectionImg from './CollectionImg';
import HotDeals from './HotDeals';
import Instagram from './Instagram';
import TopSellers from './TopSellers';
import Bottom from './Bottom';
import Footer from './Footer';
 

export class Home extends Component {
    render() {
        return (
            <>
               <NavSection/> 
               <SlideImages/>
               <Buttons/>
               <Collection/>
               <CollectionImg/>
               <HotDeals/>
               <Instagram/>
               <TopSellers/>
               <Bottom/>
               <Footer/>
            </>
        )
    }
}

export default Home
