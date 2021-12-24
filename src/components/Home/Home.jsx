import React from "react";
import './Home.css'; 
import { Carousel } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const Home = () => { 
    return (
        <div className='homepage-main'>
            <section>
                <div className='homepage-carousel'>
                    <div className='homepage-carousel-left'>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                style={{width:"100%"}}
                                className="d-block w-100"
                                src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/slider-image-.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                 style={{width:"100%"}}
                                className="d-block w-100"
                                src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/slider-image-2.jpg"
                                alt="Second slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                 style={{width:"100%"}}
                                className="d-block w-100"
                                src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/slider-image-3.jpg"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="homepage-carousel-right">
                        <div style={{display:"flex"}}>
                            <p style={{color:"#65c1be"}}>Lorem ipsum dolor sit</p>
                            <img style={{marginTop:"-39px"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/sidearea-image.png" alt="" />
                        </div>
                        <p style={{color:"white", letterSpacing:"4.5px", fontSize:"13px"}}>HOMEMADE TREATS</p>
                        <h1 className='homepage-firstSection-h1'>Ice <br /> cream <br /> shop</h1>
                        <div>
                            <Link to="/shop"><button className='view-more-btn'>VIEW MORE</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='homepage-second-section'>
                <div className='second-section'>
                    <div className='second-section-left'>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ins sen labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla mco de laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repr ehenderit . Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
                    </div>
                    <div className='second-section-right'>
                        <div style={{fontSize:"60px", fontWeight:"800"}}>Open:</div> 
                        <div >Mon – Fri: 9:00 am – 8:00 pm </div>
                        <div >Sat – Sun: 9:00 am – 10 pm</div> 
                    </div> 
                </div>
            </section>
            <section className='homepage-third-section'>
                <div className="homepage-third-inner" >
                    <div className='homepage-blocks'>
                        <img style={{width:"100%"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/home-image-1.jpg" alt="" />
                        <div style={{textAlign:"center"}}>
                            <div className='third-section-title'>Orders</div>
                            <div style={{color:"white"}}>Lorem ipsum dolor sit amet cons tetur adipisicing elit sed noi</div>
                            <div style={{color:"white", marginTop:"30px", fontSize:"13px", cursor:"pointer"}}>VIEW MORE</div>
                        </div>
                    </div>
                    <div className='homepage-blocks'>
                        <img style={{width:"100%"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/home-image-2.jpg" alt="" />
                        <div style={{textAlign:"center"}}>
                            <div className='third-section-title'>Flavors</div>
                            <div style={{color:"white"}}>Lorem ipsum dolor sit amet cons tetur adipisicing elit sed noi</div>
                            <div style={{color:"white", marginTop:"30px", fontSize:"13px", cursor:"pointer"}}>VIEW MORE</div>
                        </div>
                    </div>
                    <div className='homepage-blocks'>
                        <img style={{width:"100%"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/home-image-3.jpg" alt="" />
                        <div style={{textAlign:"center"}}>
                            <div className='third-section-title'>Our process</div>
                            <div style={{color:"white"}}>Lorem ipsum dolor sit amet cons tetur adipisicing elit sed noi</div>
                            <div style={{color:"white", marginTop:"30px", fontSize:"13px", cursor:"pointer"}}>VIEW MORE</div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="homepage-fourth">
                    <div className="fourth-inner-left">
                        <div>
                            <div style={{fontSize:"17px"}}>GET IN TOUCH</div>
                            <div style={{fontSize:"60px", fontWeight:"800", marginBottom:"30px"}}>Shops</div>
                        </div>
                        <div style={{ marginBottom:"30px"}}>
                            <div style={{fontSize:"25px", fontWeight:"800"}}>Mulberry</div>
                            <div>3094 Mulberry Avenue</div>
                            <div>Mon – Fri: 9:00 am – 8:00 pm</div>
                            <div>Sat – Sun: 9:00 am – 10 pm</div>
                        </div>
                        <div>
                            <div style={{fontSize:"25px", fontWeight:"800"}}>Kincheloe</div>
                            <div>94203 Kincheloe Road</div>
                            <div>Mon – Fri: 9:00 am – 8:00 pm</div>
                            <div>Sat – Sun: 9:00 am – 10 pm</div>
                        </div>
                    </div>
                    <div className="fourth-inner-right">
                        <img style={{width:"90%"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/home-image-4-1024x610.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section className="homepage-fifth">
                <img style={{width:"300px", marginBottom:"40px"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/instagram-7-1.jpg" alt="" />
                <img style={{width:"300px", marginBottom:"40px"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/instagram-6-1.jpg" alt="" />
                <img style={{width:"300px", marginBottom:"40px"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/instagram-4-1.jpg" alt="" />
                 <img style={{width:"300px", marginBottom:"40px"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/instagram-3-1.jpg" alt="" />
                 <img style={{width:"300px", marginBottom:"40px"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/instagram-2-1.jpg" alt="" />
                <img style={{width:"300px", marginBottom:"40px"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/instagram-1-1.jpg" alt="" /> 
            </section>
            <section className='feedback'>
            <div className="feedback-inner">
                <div className='homepage-feedback-left'>
                    <div>JOIN OUR NEWSLETTER</div>
                    <div className="homepage-contact-us">Contact us</div>
                    <div>3094 10 Mulberry Avenue, 503-532-9565, 509-587-1034</div>
                    <div>Mon – Fri: 9:00 am – 8:00 pm,Sat – Sun: 9:00 am – 10</div>
                    <div>pm shop@bridgegelateria.com</div>
                </div>
                <div className='homepage-feedback-rigth'>
                    <input style={{height:"113px", color:"white"}} className='contact-inputs' type="text" placeholder='Your Message'/>
                    <input className='contact-inputs' type="text" placeholder='Your Name'/>
                    <input className='contact-inputs' type="text" placeholder='Your Email'/>
                    <button className='home-feedback-btn'>Submit</button>
                </div>
            </div>
        </section>
            
        </div>
    );
};

export default Home;
