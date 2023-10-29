import React from 'react'
import "../components/stickyLink.css"

//Sticky Email-link
export default function StickyLink() {
  return (
    <div className='stickyLink-wrapper'>
        <div className="mail d-none d-lg-block">
          <a href="mailto:astamig@hotmail.com">astamig@hotmail.com </a>
          <hr className="custom-hr" />
        </div>
    </div>
  )
}
