import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { Link } from 'react-router-dom'
import '../../styles/footer.css'
const Footer = () => {
  return <footer className='footer'>
<Container>
  <Row>
    <Col lg='3' md='4' sm='6'>
    <div className="footer_logo text-start">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatibus!</p>
          </div>
    </Col>


    <Col lg='3' md='4' sm='6'>
      <h5 className='footer_title'>Delivery Time</h5>
      <ListGroup className='delivery_time-list'>
        <ListGroupItem className='delivery_time-item border-0 ps-0'>
          <span>Sunday - Thursday</span>
          <p>10:00 - 23:00</p>
        </ListGroupItem>

        <ListGroupItem className='delivery_time-item border-0 ps-0'>
          <span>Friday - Saturday</span>
          <p>Off Day</p>
        </ListGroupItem>
      </ListGroup>
    </Col>


    <Col lg='3' md='4' sm='6'>
    <h5 className='footer_title'>Contact</h5>
      <ListGroup className='delivery_time-list'>
      <ListGroupItem className='delivery_time-item border-0 ps-0'>
          <span>Location: Bishkek, Kyrgyzstan</span>
        </ListGroupItem>
        <ListGroupItem className='delivery_time-item border-0 ps-0'>
          <span>Phone: +996701234567</span>
        </ListGroupItem>

        <ListGroupItem className='delivery_time-item border-0 ps-0'>
          <span>Email: prostoprimer@gmail.com</span>
        </ListGroupItem>
      </ListGroup>
    </Col>

    <Col lg='3' md='4' sm='6'>
    <h5 className='footer_title'>Social Media</h5>
    <p>Feel free to subscribe!</p>
    <div className="social_media d-flex align-items-center gap-4">
      <span>
          <Link to='/login'><i class="ri-instagram-fill"></i></Link>
      </span>
      <span>
          <Link to='/login'><i class="ri-telegram-fill"></i></Link>
      </span>
      <span>
          <Link to='/login'><i class="ri-facebook-box-fill"></i></Link>
      </span>
    </div>
    </Col>
  </Row>

  <Row className='mt-5'>
    <Col lg='6' md='6'>
      <p className='made_by'>Made with <i class="ri-heart-3-line"></i> by Saera Kurbanova</p>
    </Col>
  </Row>
</Container>
  </footer>
}

export default Footer