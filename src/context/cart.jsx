import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";


// crear contexto
export const CartContext = createContext();

// crear el provider
export const CartProvider = ({ children }) => {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
