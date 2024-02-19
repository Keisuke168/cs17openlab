import React from 'react'
import Movie from '../../images/video.mp4'


const Hero = () => {
    return (
        <>
            <div className="video">
                <video autoPlay muted loop playsInline>
                            <source src={Movie} type="video/mp4" />
                </video>
            </div>
   
            <div className="hero">
                <div className="catch">
                    <h1>
                    CS17
                    <br /> TAKIGUCHI LAB.
                    </h1>
                    <p>よく学び，よく遊べ．</p>
                </div>
            </div>
        </>
    )
}

export default Hero;