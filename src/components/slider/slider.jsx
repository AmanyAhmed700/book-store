import React from 'react';
import "./slider.css";
import FirstBook from "../../images/book1.png";
import SecondBook from "../../images/book2.png";
import ThirdBook from "../../images/book3.png";
import {useState} from "react";
const Slider = () => {
    const[slideIndex,setSlideIndex]=useState(0);

   const handleClick=(direction) =>{
    if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex -1:2);
    }
    else{
        setSlideIndex(slideIndex <2 ? slideIndex +1:0);
    }
   }
    return (
    <div className='slider-cont'>
    <i onClick={()=>handleClick("left")} className="bi bi-chevron-double-left arrleft"></i>
        <div style={{transform:`translateX(${slideIndex * -100}vw)`}} className="sliderwrapper">

            <div className="slide firstbook">
                <div className="slideimagewrap">
                    <img src={FirstBook} alt='fbook' />
                </div>
                <div className="slideinfo">
                    <h1>Book Store</h1>
                    <p>
                    It is not just reading , It is living the adventure.
                    </p>
                </div>
            </div>


            <div className="slide secondbook">
                <div className="slideimagewrap">
                    <img src={SecondBook} alt='sbook' />
                </div>
                <div className="slideinfo">
                    <h1>The Book for everyone </h1>
                    <p>
                    You can read at home or read at bookstore.
                    </p>
                </div>
            </div>





            <div className="slide thirdbook">
                <div className="slideimagewrap">
                    <img src={ThirdBook} alt='thbook' />
                </div>
                <div className="slideinfo">
                    <h1>Check out the new titles</h1>
                    <p>
                   We send you the book you want at home.
                    </p>
                </div>
            </div>


        
       
        
      
      </div>
   <i onClick={()=>handleClick("right")} className="bi bi-chevron-double-right arrright"></i>
    </div>
  );
}

export default Slider;