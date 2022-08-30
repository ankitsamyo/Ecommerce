import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
export default function Cart() {
    const CartData = useSelector(state => state.cart.value)
    const DataRedux=useSelector(state=>state.cart.value.reduce((x,ob)=>ob.id?x+1:x,0))
    console.log(CartData)
    return (
        <>
            <div className='bgOne'>
                <div className="header_midil">
                    <div className="container">
                        <div className="row d_flex">
                            <div className="col-md-4">
                                <ul className="conta_icon d_none1">
                                    <Link to='/' className="cart">Home</Link>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <ul className="right_icon d_none1">
                                    <Link to='/Cart'><p className='cart'>Cart:{DataRedux}</p></Link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>Image</th>

                    </tr>
                </thead>
                <tbody>
                    {CartData.map((ob, index) =>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{ob.tag}</td>
                            <td>{ob.price}</td>
                            <td><img src={ob.image} alt="failed" style={{ width: '100px', height: '80px' }} /></td>
                        </tr>
                    )}

                </tbody>
            </table>
        </>
    )
}
