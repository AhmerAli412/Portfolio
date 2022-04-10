import React from 'react'
import "./Intro.css"

export default function Intro() {
  return (
    <div className='i'> 
      <div className='i-left'>
          <div className='i-left-wraper'>
          <h2 className='i-intro'>Hello, my name is</h2>
          <h1 className='i-name'>Ahmer Ali</h1>
          <div className='i-title '>
              <div className='i-title-wraper'>
                <div className='i-title-item'>Web developer</div>
                <div className='i-title-item'>React developer</div>
                <div className='i-title-item'>App developer</div>
                <div className='i-title-item'>UI/UX developer</div>
                <div className='i-title-item'>JavaScript developer</div>
              </div>
          </div>
          <div className='i-desc'>
          I'm a software engineer, and in my experience, using the term dev (short for "developer) or eng (short for engineer) are both common things to say, and people I have worked with seem to be fine with both terms.
          </div>
          </div>
      </div>
      <div className='i-right'>
          <div className='i-bg'>
          <img src='me1.png' alt='' className='i-img'/>
      </div>
      </div>
    </div>
  )
}
