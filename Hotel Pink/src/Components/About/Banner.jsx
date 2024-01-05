import React from 'react';
import banner from './img/banner.png';

import {motion as m} from 'framer-motion';

function Banner() {
    return (
        <>
            <div className="banner_outer">

                <m.div
                initial={{x:"-100%"}}
            animate={{x:"0%"}}
            transition={{duration:0, ease: "easeOut"}}
            exit={{opacity:1}}
                >
                        <img src={banner} alt="Not found" />

                </m.div>


                <m.div className='second_div_about'
                initial={{x:"100%"}}
            animate={{x:"0%"}}
            transition={{duration:0 , ease: "easeOut"}}
            exit={{opacity:1}}
                >

                    <div><h2>About Us</h2></div>
                     <p><q className='testingQuote'> Hotel Pink is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, It aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. The brand is making a conscious effort to bring the power of fashion to shoppers with an array of the latest and trendiest products available in the country </q></p>
                </m.div>


            </div>


            

            

            
        </>
    );
}

export default Banner;