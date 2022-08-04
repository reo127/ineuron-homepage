import React from 'react'
import book from '../images/landing-page/statistics/books-icon.svg'
import student from '../images/landing-page/statistics/student-iocn.svg'
import cradeDard from '../images/landing-page/statistics/credit-card-icon.svg'


const HardWork = () => {
  return (
    <div>
        <section className="motivation text-center my-5 ">

            <div className="motivation_text">
                <h1 className='motivation_underline'> Pure Hardwork, No Shortcuts! </h1>
            </div>

            <div className="motivation_cards d-flex justify-content-evenly align-items-center flex-wrap my-4 mb-5">
            <div className="motivation_card text-center d-flex flex-column justify-content-center mx-4">
                <img src={student} alt="Book"className='d-block' />
                <p> 400 + </p>
                <h2> Different Courses </h2>
            </div>

            <div className="motivation_card text-center d-flex flex-column justify-content-center mx-4">
                <img src={book} alt="Book"className='d-block' />
                <p> 400000 + </p>
                <h2> Students Enrolled </h2>
            </div>

            <div className="motivation_card text-center d-flex flex-column justify-content-center mx-4">
                <img src={cradeDard} alt="Book"className='d-block' />
                <p> 10000 + </p>
                <h2> Successful Transition </h2>
            </div>

            </div>


        </section>
    </div>
  )
}

export default HardWork