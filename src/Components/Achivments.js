import React, { useRef, useState } from 'react'
import company1 from '../images/landing-page/companies/affine.png'
import company2 from '../images/landing-page/companies/boeing.png'
import company3 from '../images/landing-page/companies/bun&bradstreet.png'
import company4 from '../images/landing-page/companies/cohesity.png'
import company5 from '../images/landing-page/companies/eminds.png'
import company6 from '../images/landing-page/companies/freshworks.png'
import company7 from '../images/landing-page/companies/geekyants.png'
import company8 from '../images/landing-page/companies/greendeck.png'
import company9 from '../images/landing-page/companies/informatica.png'
import company10 from '../images/landing-page/companies/innova.png'



const Achivments = () => {


    return (
        <div>
            <div className="achivements">
                <section>
                    <h1 className='achivers_text text-center my-5 motivation_underline'>Our Achiever's Work with </h1>

                    <div className="company_names my-5">
                        <div className="companys d-flex justify-content-evenly align-items-center flex-wrap ">
                            <img src={company1} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company2} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company3} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company4} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company5} className='d-block py-3 px-4' alt="Company Image" />
                        </div> 
                        <div className="companys d-flex justify-content-evenly px-4ntent-evenly align-items-center flex-wrap ">
                            <img src={company6} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company7} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company8} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company9} className='d-block py-3 px-4' alt="Company Image" />
                            <img src={company10}className='d-block py-3 px-4' alt="Company Image" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Achivments