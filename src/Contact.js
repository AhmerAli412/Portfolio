import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

export default function Contact() {
 
 const formRef = useRef()

 const handleSubmit = (e) =>{
     e.preventDefault()
     emailjs.sendForm('service_nwp6yi7', 'template_y56ls2i', formRef.current, 'user_yWFaQ70TFwiutQUKnHNpE')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });
 }
 
 
 
    return (
    <>
      <div className='m-3 '>
        <h1 className='text-center'><strong className='contact'>Contact us</strong></h1>
      </div>
      <div className='container container_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form ref = {formRef} onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" name='user_name' id="exampleFormControlInput1" placeholder="Enter your name" />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Phonr</label>
                <input type="number" class="form-control" name='user_num' id="exampleFormControlInput1" placeholder="Mobile number" />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" name='user_email' id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>

             
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" name='message' id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-12">
    <button class="btn btn-primary con mb-5" type="submit">Submit form</button>
  </div>

            </form>
          </div>
        </div>

      </div>
    </>
  )
}
