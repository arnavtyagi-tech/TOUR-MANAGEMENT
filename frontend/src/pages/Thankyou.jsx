import React from 'react'
import { Container, Row, Col } from "reactstrap";
import {Link} from "react-router-dom";
import '../styles/thank-you.css';
const Thankyou = () => {
  return (<>
    <section>
        <Container>
            <Row>
                <Col lg='12' className="pt-5 text-center">
                        <div className="thank__you">
                            <span><i class="ri-checkbox-circle-line"></i></span>
                            <h1 className='mb-3 fw-semibold'>Thank You</h1>
                            <h3 className='mb-4'>your tour is booked.</h3>
                            <Link to="/home" className="btn primary__btn w-25">Back to Home</Link>
                        </div>
                </Col>
            </Row>
        </Container>
    </section>
    
    </>
  )
}

export default Thankyou;