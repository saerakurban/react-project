import React, {useRef} from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'

const Login = () => {

  const loginEmailRef = useRef()
  const loginPasswordRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return <Helmet title='Login'>
    <CommonSection title='Login'/>
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12' className='m-auto text-center'>
          <form action="" className="form mb-5" onSubmit={submitHandler}>
            <div className="form_group">
              <input type="email" placeholder='Email' required ref={loginEmailRef}/>
            </div>
            <div className="form_group">
              <input type="password" placeholder='Password' required ref={loginPasswordRef}/>
            </div>
            <button type='submit' className="addToCart_btn">Login</button>
          </form>

          <Link to='/register'>Don't have an account? Create</Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login