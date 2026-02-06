import React from 'react'
import Slider from  "../../components/slider/slider";
import Services from "../../components/services/Services";
import BookSlider from "../../components/book-slider/BookSlider";
import {books} from '../../data/books';
import { HeadingTitle } from "../../components/HeadingTitle/HeadingTitle";
const HomePage = () => {
  return (
    <div className='home'>
    <Slider/>
   <Services/>
   <HeadingTitle title="Most gifted"/>
   <BookSlider data={books}/>
   <HeadingTitle title="Best seller"/>
   <BookSlider data={books}/>
   <HeadingTitle title="Most Wished For"/>
   <BookSlider data={books}/>
    </div>
  );
}

export default HomePage;