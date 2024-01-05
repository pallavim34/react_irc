import React from 'react';
import rightlogo from '../img/rightlogo.png';
import {motion as m } from 'framer-motion';








function TopBanner() {

    return (

            <div className='top_banner'>
            <m.div className='topbanner_heading' 
            initial={{x:"-100%"}}
            animate={{x:"0%"}}
            transition={{duration:0 , ease: "easeOut"}}
            exit={{opacity:1}}
            
            
            >
            
                    
                    <h1>Everything is There For Your Beauty Needs</h1>

                    




            </m.div>
            <m.div initial={{x:"100%"}}
            animate={{x:"0%"}}
            transition={{duration:0 , ease: "easeOut"}}
            exit={{opacity:1}}>
                    <img src={rightlogo} alt="Not Found" />
            </m.div>

            <div className='checking'></div>
        </div>
    );
}

export default TopBanner;