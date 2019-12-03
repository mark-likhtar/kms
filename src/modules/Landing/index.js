import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

import * as animation from './constants';
import './styles.css';


const Landing = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowPreloader(false), 5000)
  })

  return (
    <div>
      {!showPreloader && (<div className="main">
        <section className="animation-section animation-section-left">
          <Lottie options={animation.planetAnimation} boxShadow="0 0 10px 1px black" height={700} width={1100} />
        </section>
        <section className="animation-section animation-section-left">
          <Lottie options={animation.bannerAnimation} boxShadow="0 0 10px 1px black" height={700} width={1100} />
        </section>
        <section className="animation-section animation-section-left">
          <Lottie options={animation.logoAnimation} boxShadow="0 0 10px 1px black" height={400} width={400} />
        </section>
        <section className="animation-section animation-section-right">
          <Lottie options={animation.flyAnimation} height={400} width={600} />
        </section>

        <section>
          <div id="city"></div>
        </section>

      </div>)}
      {showPreloader && (<div id="canvas-container" >
        <canvas id="sineCanvas" width="1024" height="300"></canvas>
      </div>)}
    </div>



  )
}

export default Landing;
