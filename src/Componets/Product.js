import React from 'react'
import { addCart } from '../ReduxData/CartSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import ProductData from '../Module/ProductData'
export default function Product() {
   const [Product, setProduct] = useState("Feature Product")
   return (
      <>
         <div id="project" className="project">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage">
                        <h2><span type="button" onClick={() => { setProduct("Please Select Item") }} >{Product}</span></h2>
                     </div>
                  </div>
               </div>
               <div className='row'>
                  <div className="product_main">
                     {ProductData.map((e) => {
                        return (

                           <div className=" project_box">
                              <FeatureSingle image={e.image} tag={e.tag} id={e.id} price={e.price} />
                           </div>
                        )
                     }
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

function FeatureSingle(props) {
   const dispatch=useDispatch();
   const add=()=>{
     const Data=props
     dispatch(addCart(Data))
   }
   return (
      <>
          <img class="dark_white_bg" src={props.image} />
          <p>{props.tag} {props.price}</p>
          <span onClick={()=>add(props)} className="bg">Add to Cart</span>
      </>
   )
}

