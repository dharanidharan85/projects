import { createContext ,useEffect,useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext= createContext(null)

const StoreContextProvider = (props)=>{

    const [cartitems,setcartitems]=useState({})

    const addtocart =(itemId) =>{
        if (!cartitems[itemId]){
            setcartitems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }


    const removefromCart=(itemId)=>{
        setcartitems(((prev)=>({...prev,[itemId]:prev[itemId]-1})))
    }

    const gettotalcartamount= () =>{
        let totalamount= 0;
        for(const item in cartitems)
        
        
            if(cartitems[item] > 0){
                
                let iteminfo = food_list.find((product)=>product._id === item);
                totalamount += iteminfo.price * cartitems[item];
                
                
            }
           return totalamount;
        
    }
    
const contextvalue = {
    food_list,
    cartitems,
    setcartitems,
    removefromCart,addtocart,
    gettotalcartamount
}

return(
    <StoreContext.Provider value={contextvalue}>
        {props.children}
    </StoreContext.Provider>
)

}
export default StoreContextProvider