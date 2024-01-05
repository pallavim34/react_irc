import React, { useEffect, useState } from 'react';
import './limited.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import mainAction from '../../../ReduxStore/Actions/mainAction';
import { useDispatch } from 'react-redux'; 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function LimitedTimeDeal() {


    const [data , updateData] = useState([])

    const [width , setWidth] = useState(window.screen.width);

    function actual() {
        setWidth(window.innerWidth);
      }

    useEffect(()=>{

        window.addEventListener("resize" , actual);
        console.log(width)
        return () => {
            window.removeEventListener("resize", actual);
          };
    })

    function updateTrending(val){
        
        updateData(val)
    }


    const dispatch = useDispatch();

    useEffect(()=>{
        mainAction(dispatch , updateTrending)
    },[])

    return (
        <>
            <div className="limitedTimeDealOuter">
            <span className='testinglimte'> </span>
            <p  className='timerComp'><FontAwesomeIcon    /> </p>
        
            </div>

        </>
    );
}

export default LimitedTimeDeal;