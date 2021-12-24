import React from 'react';
import './About.css';

const AboutUs = () => {
    return (
        <div className='about-us'>
            <section className='aboutus-first'>
                <img style={{width:"100%"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/about-image-1.jpg" alt="" />
            </section>
            <section className='aboutus-second'>
                <div style={{fontSize:"13px", fontWeight:"600"}}>ABOUT US</div>
                <div className="aboutUs-story">Our story</div>
                <div className='aboutus-second-inner'>
                    <div style={{fontSize:"20px", marginRight:"16px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                        sed do eiusmod sens u tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veni am, quis nostrud exercitation ullamco laboris nisi ut 
                         aliquip ex ea commodo exea consequat. Duis aute irure dolor in reprehenderit 
                         in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                           id est laborum. Sed ut perspiciatis unde omnis iste natus error sit Lorem ipsum 
                           dolor sit amet, consectetur </div>
                    <div style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod sens 
                        u tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni am,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo exea 
                         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                         dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                         sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                          unde omnis iste natus error sit Lorem ipsum dolor sit Lorem ipsum dolor sit </div>
                </div>
            </section>
            <section className='homepage-third-section'>
                <div className='aboutus-third-inner'>
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
        </div>
    );
};

export default AboutUs;