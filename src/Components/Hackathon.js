import React, { useRef, useState } from 'react'
import company1 from '../images/landing-page/hackathon/geekyants.png'
import company2 from '../images/landing-page/hackathon/github.png'
import company3 from '../images/landing-page/hackathon/jetbrains.png'
import company4 from '../images/landing-page/hackathon/learnyst.png'
import company5 from '../images/landing-page/hackathon/musigma.png'
import company6 from '../images/landing-page/hackathon/nvidia.png'
import company7 from '../images/landing-page/hackathon/nvidia.png'
import company8 from '../images/landing-page/hackathon/redis.png'




const Hackathon = () => {


    return (
        <div>
            <div className="achivements hackations">
                <section>
                    <h1 className='achivers_text text-center my-5 motivation_underline'> Hackathon Companies </h1>

                    <div className="company_names my-5">
                        <div className="companys d-flex justify-content-evenly align-items-center flex-wrap ">
                            <img src={company1} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company2} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company3} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company4} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company6} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company8} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company5} className='d-block py-3 px-4' alt="Company Image" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Hackathon