import { createSlice } from "@reduxjs/toolkit"

 const CartSlice = createSlice({
        name :"Cart",
        initialState :{
            value : [],
            
            
            },
        reducers : {
            addCart : function(state,action)
            {
                state.value=[...state.value,action.payload]
               
            },
        
    }
 })
export const {addCart} =  CartSlice.actions
export default CartSlice.reducer;

