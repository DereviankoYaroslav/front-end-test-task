import React from 'react'

const Reviews = () => {
  return (
    <div className='reviews'>
        <div className='heading'>
            <p className='heading-main-text'>Client  reviews</p>
            <p className='heading-desc'>Happy clients, happy us. Read our client reviews about the work process and results.</p>
        </div>
        <div className='reviews-row'>
            <div className='overlay-1'></div>
            <div className='item-reviews-1'>
                <p className='reviews-main-text'>Solis did a great job. Whether providing direct development support or giving us the opportunity to make our development updates, Solis's web design expertise and support services were top notch! It didn't take long to stand up our website, and we were pleased with the design and layout of the graphics and information. </p>
                <p className='reviews-desc'>Dr. Jamika Burge</p>
            </div>
            <div className='overlay-2'></div>
            <div className='item-reviews-2'>
                <p className='reviews-main-text'>Solis is a cutting edge company and knows the importance of excellence. Having been in business for 21 years, I know when I’ve found a competent professional and more importantly a company with integrity. I highly recommend this company and am available for further reference if needed.</p>
                <p className='reviews-desc'>Evie-Rose Prosse</p>
            </div>
            <div className='overlay-3'></div>
            <div className='item-reviews-3'>
                <p className='reviews-main-text'>I can’t say enough about how knowledgeable Toinette Rorie is in the area of Web Development. She indeed is a developer and can build a site from scratch. She understands functionality and is great at constructing a site that is robust and fully functioning. </p>
                <p className='reviews-desc'>Elvis Mooney</p>
            </div>
        </div>
    </div>
  )
}

export default Reviews