import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:3000";

    // Initialize token from localStorage
    const [token, setToken] = useState("");
    const[food_list,setFoodList]=useState([])

    // Sync token with localStorage
    /*useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);*/

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})

        }

    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    };

    /*const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        console.log(totalAmount);
        

        return totalAmount;

    };*/


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        
        // Iterate over each item in the cart
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                // Find the item in the food list
                let itemInfo = food_list.find((product) => product._id === item);
                
                // Check if item exists and has a valid price
                if (itemInfo && itemInfo.price) {
                    totalAmount += itemInfo.price * cartItems[item];
                } else {
                    // Log an error if the item is missing or doesn't have a price
                    console.log(`Item with ID ${item} not found or missing price`);
                }
            }
        }
        
        return totalAmount;
    };
    
    


    const fetchFoodList =async () =>{
        const response=await axios.get(url+"/api/food/list");
        setFoodList(response.data.data)
    }

    const loadCartData=async (token) =>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData);
    }

    useEffect(()=>{
        async function loadData(){
            await fetchFoodList()
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"))
            }
        }
        loadData()
    },[])

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
