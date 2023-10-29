import React from 'react'
import "./contact.css"

//Contact me with button that links to my Email.
export default function Contact() {
  return (
    <div className="container mt-5 pt-5 mb-5 pb-5">
        <div className="row justify-content-center">
            <div id='contact' className="col-12 col-lg-10 text-center">
                <span>03. What's next?</span>
                <h1 className='mb-3'>Get in touch</h1>
                <p className='fs-6 mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal . The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                <a className='myBtn' href="mailto:astamig@hotmail.com">Say Hello</a>
            </div>
        </div>
    </div>
  )
}
