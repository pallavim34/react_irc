import React from 'react';
import {motion as m } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
function Maximise() {

const navigate = useNavigate();

    function handleCatClick(val){
        navigate(`/category/${val}`);
    }

    return (
        <>
          
        </>
    );
}

export default Maximise;