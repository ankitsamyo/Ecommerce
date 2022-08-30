import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Product from "../Componets/Product";


export default function Home() {
   const DataRedux = useSelector(state => state.cart.value.reduce((x, ob) => ob.id ? x + 1 : x, 0))
   console.log(DataRedux)

   return (
      <>
        
         <div className="bgOne">
            <div className="header_midil">
               <div className="container">
                  <div className="row justify-content-between">
                     <div>
                        <ul>
                           <Link to='/' className="homecart" >Home</Link>
                        </ul>
                     </div>
                     <div>
                        <ul>
                           <Link to='/Cart'><p className="cart">Cart:{DataRedux} Items</p></Link>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Product />
      </>
   )
}

