import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 10;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {

        if (!size) {
            alert("Please select a size");
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {

            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }

        }
        else {

            cartData[itemId] = {};
            cartData[itemId][size] = 1;

        }

        setCartItems(cartData);

        console.log(cartData);
    };

    const getCartCount = () => {

        let totalCount = 0;

        for (const itemId in cartItems) {

            for (const size in cartItems[itemId]) {

                try {
                    totalCount += cartItems[itemId][size];
                }
                catch (error) {
                    console.log(error);
                }

            }

        }

        return totalCount;
    };

    const removeFromCart = (itemId, size) => {

    let cartData = structuredClone(cartItems);

    if (cartData[itemId] && cartData[itemId][size]) {

        cartData[itemId][size] -= 1;

        if (cartData[itemId][size] === 0) {
            delete cartData[itemId][size];
        }

        if (Object.keys(cartData[itemId]).length === 0) {
            delete cartData[itemId];
        }
    }

    setCartItems(cartData);
};

    const value = {
        products,
        currency,
        delivery_fee,

        search,
        setSearch,

        showSearch,
        setShowSearch,

        cartItems,
        setCartItems,

        addToCart,
        getCartCount,
        removeFromCart
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;