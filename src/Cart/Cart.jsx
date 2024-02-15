
import React, { Component } from 'react'

export class Cart extends Component {
  static propTypes = {}

  render() {
    return (
      <>
      <div className='Cart-Container flex justify-between pl-20'>
        <div className='Cart-Left w-3/5'>
        <h1 className=''>Shopping Cart</h1>
        <div className='Headings flex justify-between pt-10 pb-10 border-y-2'>
            <div className='w-2/6'>  Product</div>
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Subtotal</div>
        </div>
        <div className='Products flex'>
            <img src="" alt="" />
            <div>Black Hoodie</div>
            <div>70 DOLLAR</div>
            <div>1</div>
            <div>70 </div>
        </div>
        <div className='Extra'>

        </div>
        </div>
        <div className='Cart-Right'>
            <h1>Cart Totals</h1>
            <div className='Subtotal'></div>
            <div className='Ship'></div>
            <div className='Total'></div>
        </div>
      </div>
      </>
    )
  }
}

export default Cart