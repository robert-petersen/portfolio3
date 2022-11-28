import React, { useState } from 'react';
import Video from "../../videos/pexels-crazy-motions-8733062.mp4";
import {MdArrowDownward as ArrowDownward, MdArrowForward as ArrowForward} from "react-icons/md";

const Landing = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <section className='landing-container'>
      <div className='landing-video-container'>
        <video autoPlay loop muted src={Video} type="video/mp4" />
      </div>
      <div className='landing-text-container'>
        <h1>Hey, I'm Rob</h1>
        <h2>A Full-Stack Web Developer from Chicago, IL</h2>
        <button 
          to="about" 
          onMouseEnter={onHover} 
          onMouseLeave={onHover}
          smooth={"true"}
          duration={500}
          spy={"true"}
          exact="true"
          offset={-60}
        >Continue {hover ? <ArrowDownward /> : <ArrowForward />} </button>
      </div>
      <div className='landing-fadeout'></div>
    </section>
  )
}

export default Landing;