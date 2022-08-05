import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import {Container, Row, Col} from 'reactstrap'
import CommonSection from '../components/UI/common-section/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import '../styles/checkout.css'



const Checkout = () => {
  const [enterName, setEnterName] = useState('')
  const [enterPhone, setEnterPhone] = useState('')
  const [enterAddress, setEnterAddress] = useState('')
  const shippingInfo = []


  const cartTotalAmount = useSelector((state) => state.cart.totalAmount)
  const shippingCost = 30
  const totalAmount = cartTotalAmount + Number(shippingCost)

  const submitHandler = (e) => {
    e.preventDefault()
    const userShippingAddress = {
      name: enterName,
      phone: enterPhone,
      address: enterAddress
    }
    shippingInfo.push(userShippingAddress)
    console.log(shippingInfo);
  }

  return <Helmet title='Checkout'>
    <CommonSection title='Checkout'/>
    <section>
      <Container>
        <Row>
          <Col lg='8' md='6'>
            <h6 className='mb-4'>Shipping Address</h6>
          <form  className="checkout_form" onSubmit={submitHandler}> 
          <div className="form_group">
            <input type="text" placeholder='Enter your name' required onChange={(e) => setEnterName(e.target.value)}/>
          </div>
          <div className="form_group">
            <input type="text" placeholder='Phone number' required onChange={(e) => setEnterPhone(e.target.value)}/>
          </div>
          <div className="form_group">
            <input type="text" placeholder='Enter your address'required onChange={(e) => setEnterAddress(e.target.value)}/>
          </div>
          <button className="addToCart_btn">Payment</button>
          </form>

          </Col>

          <Col lg='4' md='6'>
          <div className='checkout_bill'>
            <h6 className='d-flex align-items-center justify-content-between mb-3'>Subtotal: <span>${cartTotalAmount}</span></h6>
            <h6 className='d-flex align-items-center justify-content-between'>Shipping: <span>${shippingCost}</span></h6>
            <div className='checkout_total'>
            <h5 className='d-flex align-items-center justify-content-between'>Total: <span>${totalAmount}</span></h5>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Checkout