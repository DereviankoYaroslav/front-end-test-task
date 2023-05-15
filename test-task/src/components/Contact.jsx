import React from 'react'

const Contact = () => {
  return (
    <div className='contacts'>
        <div className='contacts-devider'></div>
        <div className='promices-row'>
            <div className='item-contact-1'>
                <p className='contacts-main-text'>Contact  our sales team</p>
                <p className='contacts-desc'>Our team is happy to answer your sales questions.Fill out the form and we’ll be in touch as soon as possible.</p>
            </div>
            <div className='item-contact-2'>
                <form action="" method="post">
                    <label className='contact-label' for="POST-name">Your name</label>
                    <input className='input-contact' id="POST-name" type="text" name="name"></input>
                    <div className='form-devider'></div>
                    <label className='contact-label' for="POST-email">E-mail</label>
                    <input className='input-contact' id="POST-email" type="email" name="email"></input>
                    <div className='form-devider'></div>
                    <label className='contact-label' for="POST-more">Tell more</label>
                    <input className='input-contact' id="POST-more" type="text" name="more"></input>
                    <div className='form-devider'></div>
                    <input className='input-button' type="submit" value="SEND REQUEST"></input>
                    <p className='input-button-bg'></p>
                </form>
            </div>
        </div>
        <div className='contacts-devider'></div>
    </div>
  )
}

export default Contact