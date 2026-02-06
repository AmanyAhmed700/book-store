import { useState, useEffect } from "react";
import BookStoreContext from "./bookStorContext";

const BookStoreProvider = ({ children }) => {
  const [cartInfo, setCartInfo] = useState([]);

  // Handle Add To Cart
  const addToCart = (item, qty) => {
    // Ensure quantity is a number
    const quantity = parseInt(qty, 10);
    
    if (isNaN(quantity) || quantity <= 0) {
      console.error('Invalid quantity:', qty);
      return;
    }

    const newCartItem = {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      quantity: quantity, // Use parsed quantity
      author: item.author,
    };

    // Check if item exists in cart
    const isExist = cartInfo.find((cart) => cart.id === newCartItem.id);

    if (isExist) {
      // Using functional update to avoid issues with stale state
      setCartInfo(prevCartInfo => 
        prevCartInfo.map(cart => 
          cart.id === newCartItem.id ? newCartItem : cart
        )
      );
    } else {
      // Add new item to cart
      setCartInfo(prevCartInfo => [...prevCartInfo, newCartItem]);
    }
    
    console.log('Cart updated:', newCartItem);
    console.log('Current cart state after update:', cartInfo);
  };

  // Handle Remove From Cart
  const removeFromCart = (id) => {
    setCartInfo(prevCartInfo => prevCartInfo.filter(item => item.id !== id));
    console.log('Item removed from cart, id:', id);
  };
  
  // Log cart info changes for debugging
  useEffect(() => {
    console.log('Current cart state:', cartInfo);
  }, [cartInfo]);

  return (
    <BookStoreContext.Provider
      value={{
        cartInfo,
        addToCart,
        removeFromCart,
        cartInfoLength: cartInfo.length,
      }}
    >
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreProvider;
