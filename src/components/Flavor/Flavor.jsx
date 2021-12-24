import React from 'react';
import './Flavor.css';

const Flavor = () => {
    return (
        <div className='flavors'>
            <section className='flavors-second'>
                <div style={{textAlign:"center"}}>
                    <div style={{color:"white"}}>INSPIRING SENSES</div>
                    <div className='flavors-main-title'>All flavors</div>
                </div>
                <div className='all-flavors'>
                    <div className='all-flavors-first'>
                        <div>
                            <div className='flavors-title'>Vanilla</div>
                            <img className="flavor-img"  src="https://insanelygoodrecipes.com/wp-content/uploads/2020/04/Ice-Cream-1024x536.webp" alt="" />
                        </div>
                        <div>
                            <div className='flavors-title'>Chocolate</div>
                            <img className="flavor-img"  src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Bowl-of-chocolate-ice-cream.webp" alt="" />
                        </div>
                        <div>
                            <div className='flavors-title'>Chocolate Chip</div>
                            <img className="flavor-img"  src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/bowl-of-chocolate-chip-ice-cream.webp" alt="" />
                        </div>
                        <div>
                            <div className='flavors-title'>Butter Pecan</div>
                            <img className="flavor-img"  src="https://insanelygoodrecipes.com/wp-content/uploads/2020/06/butter-pecan-ice-cream.webp" alt="" />
                        </div>
                    </div>
                    <div className='all-flavors-first'>
                        <div>
                            <div className='flavors-title'>Eggnog</div>
                            <img className="flavor-img"  src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/eggnog-ice-cream-with-cinnamon.webp" alt="" />
                        </div>
                        <div>
                            <div className='flavors-title'>Strawberry</div>
                            <img className="flavor-img" src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Bowl-Of-Strawberry-Ice-Cream.webp" alt="" />
                        </div>
                        <div>
                            <div className='flavors-title'>Horchata</div>
                            <img className="flavor-img"  src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/Horchata-ice-cream-with-cinnamon.webp" alt="" />
                        </div>
                        <div>
                            <div className='flavors-title'>Chocolate Chip</div>
                            <img className="flavor-img"  src="https://insanelygoodrecipes.com/wp-content/uploads/2020/07/chocolate-chip-cookie-ice-cream.webp" alt="" />
                        </div>
                    </div>
                </div>
            </section>
             <section className='flavors-first' style={{width:"100%"}}>
                <img style={{width:"100%"}} src="https://bridge294.qodeinteractive.com/wp-content/uploads/2019/12/flavor-image-1.jpg" alt="" />
            </section>
        </div>
    );
};

export default Flavor;