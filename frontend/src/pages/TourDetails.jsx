// import React from 'react'
// import '../styles/tour-details.css';
// import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
// import { useParams } from 'react-router-dom';
// import tourData from '../assets/data/tours';
// import Booking from '../components/Booking/Booking';

// const TourDetails = () => {

//   const { id } = useParams();

//   // this is a static data later we will call our API and load our data from database
//   const tour = tourData.find(tour => tour.id === id)
//   // destructure properties from tour object
//   const { photo, title, desc, price, reviews, city, distance, maxGroupSize } = tour;

//   return <>
//     <section>
//       <Container>
//         <Row>
//           <Col lg='8'>
//             <div className="tour__content">
//               <img src={photo} alt="" />
//               <div className='tour__info'>
//                 <h2>{title}</h2>
//               </div>
//             </div>
//           </Col>
//           <Col lg='4'>
//             <Booking tour={tour} />
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   </>
// };

// export default TourDetails;



import React,{useRef, useState} from 'react'
import '../styles/tour-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';

const TourDetails = () => {

  const { id } = useParams();
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] = useState(null);

  // this is a static data later we will call our API and load our data from database
  const tour = tourData.find(tour => tour.id === id)
  // destructure properties from tour object
  const { photo, title, desc, price,address, reviews, city, distance, maxGroupSize } = tour;

  const {totalRating,avgRating } = calculateAvgRating(reviews);

  // format date
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  // submit request to the server
  const submitHandler = e => {
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;

         // later will call our api

  };
  return (<>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt={title} />
              <div className='tour__info'>
                <h2>{title}</h2>
                <div className='d-flex align-items-center gap-5'>

                  <span className="tour__rating d-flex align-items-center">
                      <i class="ri-star-s-fill" style={{color:"var(--secondary-color)", marginRight: '4px'}}></i>
                      {avgRating === 0 ? "Not rated" : `${avgRating} (${reviews ?.length})`}
                  </span>

                  <span>
                    <i class="ri-map-pin-user-fill" style={{ marginRight: '0px' }}></i> {address}
                  </span>
                </div>

                <div className="tour__extra-details">
                  <span><i class="ri-map-pin-2-line" style={{ marginRight: '0px' }}></i> {city}</span>
                  <span><i class="ri-money-dollar-circle-line" style={{ marginRight: '0px' }}></i> ${price} /per person</span>
                  <span><i class="ri-map-pin-time-line" style={{ marginRight: '0px' }}></i> {distance} k/m</span>
                  <span><i class="ri-group-line" style={{ marginRight: '0px' }}></i> {maxGroupSize} people</span>
                </div>
                <h5>Description</h5>
                 <p>{desc}</p>
              </div>

               {/* tour reviews section */}
               <div className="tour__reviews mt-4">
                 <h4>Reviews ({reviews?.length} reviews)</h4>

                 <Form onSubmit={submitHandler}>
                   <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      {[1, 2, 3, 4, 5].map(rating => (
                      <span key={rating} onClick={() => setTourRating(rating)}>
                        {rating} <i className="ri-star-s-fill"></i>
                      </span>
                      ))}
                  </div>
                  
                     <div className="review__input">
                    <input
                      type="text"
                      ref={reviewMsgRef}
                      placeholder="Share your thoughts"
                      required
                    />
                    <button
                      className="btn primary__btn text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>

                 <ListGroup className="user__reviews">
                  {reviews.map((review, index) => (
                    <div key={index} className="review__item">
                      <img src={avatar} alt="Avatar" />
                      <div className="w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>muhib</h5>
                            <p>{new Date().toLocaleDateString("en-US", options)}</p>
                          </div>
                          <span className="d-flex align-items-center">
                            {review.rating} <i className="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <h6>{review.comment}</h6>
                      </div>
                    </div>
                  ))}
                </ListGroup>
              </div>
              {/* tour reviews section end */}

             </div>
          </Col>
          
          <Col lg='4'>
            <Booking tour={tour} avgRating={avgRating} /> 
          </Col>
         </Row>
      </Container>
    </section>
    {/* <Newsletter/> */}
    </>
   )
};

export default TourDetails;



