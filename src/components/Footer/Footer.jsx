import React from 'react';
import {
  InstagramOutlined,
  FacebookOutlined,
  TwitterOutlined,
  UpCircleOutlined
} from "@ant-design/icons";
import './Footer.css';

const Footer = () => {
  return (
    <footer>
                <div className="footer" style={{textAlign:"center"}}>
                {/* <UpCircleOutlined width={"8rem"} style={{color:"white"}}/> */}
                <img onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{width:"5%", marginTop:"15px", cursor:"pointer"}} src="https://www.svgrepo.com/show/257005/up-arrow.svg" alt="" />
                    <div className='footer-inner'>
                        <img src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/footer-image.png" alt="" />
                        <div style={{marginTop:"20px", marginBottom:"35px"}}>
                            <div style={{fontSize:"19px"}}>Bridge Gelateria</div>
                            <div style={{fontSize:"19px"}}>3094 10 Mulberry Avenue New York, 503-532-9565</div>
                            <div style={{fontSize:"19px"}}>Workshop@bridgegalateria.com</div>
                        </div>
                        <div class="footer-icons">
                            <a className="foot-icon">
                            <InstagramOutlined />
                            </a>
                            <a className="foot-icon">
                            <FacebookOutlined />
                            </a>
                            <a className="foot-icon">
                            <TwitterOutlined />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
  );
};

export default Footer; 
