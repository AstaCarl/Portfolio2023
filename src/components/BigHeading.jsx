import React from 'react'
import "../components/bigheading.css"
import Typewriter from './Typewriter'
import { useEffect } from 'react';


export default function BigHeading () {

  useEffect(() => {
    // After the component mounts, add the 'fadeIn' class to the <h1> element
    const h1 = document.querySelector('.fadeUp');
    h1.classList.add('fadeUp');
    const h2 = document.querySelector('.fadeIn');
    h2.classList.add('fadeIn');
    const p = document.querySelector('.appear');
    p.classList.add('appear');
  }, []);

//Fronpage big heading
  return (
    <div className='container w-100 p-0 bigHeading'>
        <div className="row justify-content-center">
            <div className="col-11 col-lg-10 p-0">
            <Typewriter text= "Hii, my name is"/>
                <h1 className='fadeUp' >Asta Carl.</h1>
                <h2 className='fadeIn'>I am a frontend-development student.</h2>
                <p className='w-100 mb-5 pb-5 appear'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
            </div>
        </div>
    </div>
  )
}
