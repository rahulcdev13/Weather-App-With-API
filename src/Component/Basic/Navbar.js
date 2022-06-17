import React from "react";

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <div className="container">
                <div className='navbar'>
                    <div className='btn-group'>
                        {menuList.map((currVal) => {
                            return <button
                                className='btn-group__item'
                                onClick={() => filterItem(currVal)}>
                                {currVal}
                            </button>
                        })}
                    </div>
                </div>
            </div>
        </>
    )

}
export default Navbar;