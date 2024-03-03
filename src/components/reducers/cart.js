export const cartInitialState = JSON.parse(localStorage.getItem("cart")) || [];

export const emptyCart = [];
export const CART_ACTION_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
};

// update localstorage uodate from cart
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayLoad } = action;

  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = actionPayLoad;
      const productInCartIndex = state.findIndex((item) => item.id === id);

      if (productInCartIndex >= 0) {
        // Structure clone - Mas visual

        // const newState = structuredClone(state);
        // newState[productInCartIndex].quantity += 1;

        // Map - mas facil de entender
        // const newState = state.map(item => {
        //     if(item.id === id){
        //         return {
        //             ...item,
        //             quantity: item.quantity + 1
        //         }
        //     }
        // })

        const newState = [
          ...state.slice(0, productInCartIndex),
          {
            ...state[productInCartIndex],
            quantity: state[productInCartIndex].quantity + 1,
          },
        ];

        updateLocalStorage(newState);
        return newState;
      }

      const newState = [
        ...state,
        {
          ...actionPayLoad, // product
          quantity: 1,
        },
      ];

      updateLocalStorage(newState);

      return newState;
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = actionPayLoad;
      const newState = state.filter((item) => item.id !== id);

      updateLocalStorage(newState);

      return newState;
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage(emptyCart);
      return emptyCart;
    }
  }

  return state;
};
