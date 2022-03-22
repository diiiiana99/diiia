

import React from "react";
import { photos } from "../data/datas.js";
import NYC from "../videos/NYC.mp4"


import "../styles/frontpage.scss";

const FrontPage = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">Dianna Ganova.</div>
       
      </div>
      <div className="top-banner">
        <div className="top-banner-content">
          <h1>FullStack Developer </h1> based in <span>New York City</span>
          <iframe
            title={"src"}
            className='resp-iframe' 
            src={
            //   "https://player.vimeo.com/video/91284753?autoplay=1&loop=1&autopause=0&muted=1"
            NYC
            }
        
            width="640"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            allow="autoplay; fullscreen"
            controls="0"
          ></iframe>
          <div className="top-banner-scrolldown">
            <span>☟</span>
          </div>
        </div>
      </div>
      <div className="main-container menu-list">
        {photos.map(({ title, url }, index) => (
          <div key={url} className="menu-item">
            <h1 className="menu-title">
              <span className="counter">{index + 1}.</span>
              {title}
            </h1>
            <h1 className="menu-title clone">
              <span className="counter">{index + 1}.</span>
              {title}
            </h1>

            <div className='menu-image-container'>
              <div
                className="menu-image"
                style={{
                  backgroundImage: `url(${url})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FrontPage;