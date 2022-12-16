import React from 'react';
import {Link as LinkS} from "react-scroll";
import Video from "../../videos/pexels-crazy-motions-8733062.mp4";

const Landing = () => {
  return (
    <section className='landing_container'>
      <div className='landing_video_container'>
        <video autoPlay loop muted src={Video} type="video/mp4" />
      </div>
      <div className='landing_text_container'>
        <h1>Hey, I'm Rob</h1>
        <h2>A Full-Stack Web Developer from Chicago, IL</h2>
        <LinkS 
          className='landing_button'
          to="about" 
          smooth={"true"}
          duration={500}
          spy={true}
          exact="true"
          offset={-60}
        >Continue</LinkS>
      </div>
      <div className='landing_fadeout'></div>
    </section>
  )
}

export default Landing;