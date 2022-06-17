import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
     
    return (
        <>
        
        <div className='container'>
        <section className='main-card--cointainer'> 
        
            {menuData.map((currVal) => {
                const {id,images,name,Category,Description} = currVal;
                return (
                    <>
                    <div className='card-conatiner' key={id}>
                        <div className='card'>
                            <div className='card-body'>
                                <span className='card-number card-circle subtle'>{id}</span>
                                <span className='card-author subtle' >{Category}</span><br/>
                                <h2 className='card-ttle'>{name}</h2><br/>
                                <span className='card-description subtle'>{Description} 
                                </span> 
                                <div className='card-read'>Read</div>
                                <img src={images} alt='images' style={{width:"500px",height:"350px"}} className='card-media' />
                                <span className="card-tag subtle">Order Now</span>
                            </div>
                        </div>
                    </div>
                    </>
                );
            })} 
        </section>
        </div>
        </>
    )
}
export default MenuCard;
