import React, { Component } from 'react'
import './Footer.css'
export class Footer extends Component {
  render() {
    return (
      <div className='BigFooter'>
        <div className='footer-main md:grid grid-cols-3 text-white'>
            <div className='md:pl-32 footer-i pl-10 '>
                <h1 className='text-4xl'>Next Inn</h1>
                <h1 className='text-2xl'>Icons<br></br>
                Contact Us</h1><h2 className='text-2xl'>
                +2122390213<br/>
                New York, USA<br/>
                Nextinn@buy.in </h2>
                <h1 className='text-3xl pt-12 pb-12'> Sign Up For our Email <br />
                List And <br />
                Recieve 10% off On your First Offer </h1>
            
                <input type='input' placeholder='Enter your Email Address' ></input><button type='submit'>SUBMIT</button>
            </div>
            <div className='text-2xl md:pl-32 pl-10 foot'>
                <div>HOW DOES IT WORK</div>
                <div>Customer Service</div>
                <div>Blogs</div>
                <div>About Us</div>
                <div>Po</div>
                <div>HandBag Manufacturers</div>
            </div>
            <div className='text-2xl md:pl-32 pl-10 foot'>
                <div>SERVICES</div>
                <div>Sample Development</div>
                <div>Apprel Production</div>
                <div>Lable Tags Packaging</div>
                <div>Global Shipping</div>
                <div>Products</div>
            </div>
        </div>
        <div>
          @All Rights are reserved for
        </div>
      </div>
    )
  }
}

export default Footer