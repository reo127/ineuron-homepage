import React from "react";
import influeacer from '../images/landing-page/hero/hero-influencers1.png'

const Hero = () => {
    return (
        <>

         <div className="hero_section">
            <section className="d-flex justify-content-between align-items-center">
                <div className="hero_left text-center d-flex justify-content-center align-items-center flex-column w-100">
                    <h4 className="underline">Learn from the best of industry</h4>
                    <h1>Highest in quality, affordable in price</h1>
                    <button className="btn-hero my-2"> Explore our Crouses </button>
                </div>

                <div className="hero_right d-flex justify-content-center align-items-center">
                    <img src={influeacer} alt="Main Hero Image" className="d-block w-75" />
                </div>

            </section>
         </div>

        </>
    )
}

export default Hero