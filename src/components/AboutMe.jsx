import React from 'react'
import "./aboutMe.css"
import Placeholder from "./placeholder.jpg"
import { useEffect, useRef } from 'react';

//About me section
export default function AboutMe() {
  const aboutMeRef = useRef();

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element is in the viewport, add the animation class
        entry.target.classList.add('slideUp'); // Define 'fadeIn' in your CSS
        // You can also disconnect the observer if you only want the animation to run once
        observer.unobserve(entry.target);
      }
    });
  }

  useEffect(() => {
    const options = {
      root: null, // The viewport is the root
      rootMargin: '0px',
      threshold: 0.1, // 0.5 means when 50% of the element is in the viewport
    };
  
    const observer = new IntersectionObserver(handleIntersect, options);
    const target = aboutMeRef.current;
  
    if (target) {
      observer.observe(target);
    }
  
    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div ref={aboutMeRef} className="container mt-5 pt-5 mb-5 pb-5 p-0 opacity">
        <div className="row mt-5 pt-5 justify-content-center">
            <div className="col-11 col-lg-10 p-0">
              <h3 className='mb-5 pt-5' id='about'><span>01. </span> About me.</h3>
            </div>
            <div className="col-11 col-md-6 col-lg-5 p-0 me-md-1 pe-md-4">
                <p className='mb-5 pe-lg-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <ul className='mt-3 mb-3 col-11 ps-0'>
                    <li><i className="bi bi-caret-right"></i>HTML 5</li>
                    <li><i className="bi bi-caret-right"></i>CSS 3</li>
                    <li><i className="bi bi-caret-right"></i>WordPress</li>
                    <li><i className="bi bi-caret-right"></i>React</li>
                    <li><i className="bi bi-caret-right"></i>PHP</li>
                    <li><i className="bi bi-caret-right"></i>SQL</li>
                </ul>
            </div>

            <div className="profile-image col-11 col-md-6 text-center p-0">
            </div>

        </div>
    </div>
  )
}
