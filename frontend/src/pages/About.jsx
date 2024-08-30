import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import experienceImg from '../assets/images/experience.png';
import Subtitle from "./../shared/Subtitle";
// import FamilyFarmer from './FamilyFarmer';
import '../styles/about.css'
import '../styles/home.css'

const About = () => {
    return (
        <>
            <div class="about-image"></div>
            <div class="about-para">
                <p>
                    <h1>We are TravelWorld</h1><br />
                    Nurtured from the seed of a single idea to empower the traveller with easy & instant travel bookings providing comprehensive choices , TravelWorld is a pioneer in India’s online travel space. Founded by Deep Kalra in the year 2000, TravelWorld began its journey by serving the US-India travel market with best-value products & services, powered by robust technology and round-the-clock customer support.

                    After successfully consolidating its position as a customer-first brand, known for its reliability and transparency, TravelWorld launched its India operations in 2005.

                    As low-cost flight carriers were introduced in India, the number of Indians opting for online travel solutions also increased rapidly. And TravelWorld answered the call of the hour, by bringing the convenience of booking flights, hotels, and holiday packages in just a few clicks.

                    Over the years, we have partnered with many leading brands from the aviation & hospitality industries, creating fruitful partner relations for business expansion opportunities. We also entered the homestays & villas and continue to procure increased market share market in the same. With this, we also entered the ground transport space and commenced offering cab, bus & train booking services.

                    What makes our story even stronger is the performance of our newly launched segments, like myBiz—our comprehensive business travel suite and myPartner—an exclusive platform for travel agents. Entering the Gulf market is our latest feat, where we offer power-packed deals on flights & hotels.

                </p></div>
            {/* experience section start */}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="experience__content">
                                <Subtitle subtitle={'Experience'} />
                                <h2>
                                    With our all experience <br /> we will serve you
                                </h2>
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    <br />
                                    Maxime amet quos nobis, facere dolorum deserunt officia.
                                </p>
                            </div>
                            <div className="counter__wrapper d-flex align-items-center gap-5">
                                <div className="counter__box">
                                    <span>12k+</span>
                                    <h6>Successful Trip</h6>
                                </div>
                                <div className="counter__box">
                                    <span>2k+</span>
                                    <h6>Regular clients</h6>
                                </div>
                                <div className="counter__box">
                                    <span>15</span>
                                    <h6>Years experience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className="experience__img">
                                <img src={experienceImg} alt='' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* experience section end */}

            

        </>
    )
}

export default About