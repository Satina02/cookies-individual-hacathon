import React from 'react';
import './CheckOut.css'
import {Link} from 'react-router-dom';

const CheckOut = () => {
    return (
        <div className='check-out' style={{width:"100%"}}>
           <section className='check-out-inner' >
               <div style={{fontSize:"20px"}}>1. THE BASICS</div>
               <div className='payment-inputs'>
                   <div style={{marginTop:"15px"}}>
                        <div>E-MAIL *</div>
                        <input style={{color:"black"}} required className="one-input" type="text" />
                   </div>
                   <div style={{display:"flex", width:"90%", justifyContent:"space-between", marginTop:"15px"}}>
                        <div style={{width:"45%"}}>
                            <div>FIRST NAME *</div>
                            <input style={{color:"black"}} required className='two-input' type="text" />
                        </div>
                        <div style={{width:"45%"}}>
                            <div>LAST NAME </div>
                            <input style={{color:"black"}} required className='two-input' type="text" />
                        </div>
                   </div>
                   <div style={{marginTop:"15px"}}>
                        <div>PHONE NUMBER *</div>
                        <input style={{color:"black"}} required className="one-input" type="number" />
                   </div>
                   <div style={{marginTop:"15px"}}>
                        <div>ADDRESS 1 *</div>
                        <input style={{color:"black"}} required className="one-input" type="text" />
                   </div>
                   <div style={{marginTop:"15px"}}>
                        <div>ADDRESS 2</div>
                        <input style={{color:"black"}} required className="one-input" type="text" />
                   </div>
                   <div style={{display:"flex", width:"90%", justifyContent:"space-between", marginTop:"15px"}}>
                        <div style={{width:"45%"}}>
                            <div>CITY *</div>
                            <input style={{color:"black"}} required className='two-input' type="text" />
                        </div>
                        <div style={{width:"45%"}}>
                            <div>ZIP CODE *</div>
                            <input style={{color:"black"}} required className='two-input' type="text" />
                        </div>
                   </div>
                   <div style={{marginTop:"15px"}}>
                        <div>COUNTRY</div>
                        <input style={{color:"black"}} required className="one-input" type="text" />
                   </div>
               </div>
               <div style={{textAlign:"center", marginTop:"30px"}}>
               <Link to="/payment"><button style={{width:"50%", height:"55px", cursor:"pointer", 
                     backgroundColor:"aqua", color:"darkgoldenrod", border:"none", outline:"none"}}>CONTINUE
                     </button>
                </Link>
               </div>
           </section>
           <section style={{width:"40%"}}></section>
        </div>
    );
};

export default CheckOut;