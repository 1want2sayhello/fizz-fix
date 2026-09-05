export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const incomingItem = action.payload;

      const existingItem = state.find(
        (item) =>
          item.productId === incomingItem.id &&
          item.customizations.length === 0, //v2 update
      );

      if (existingItem) {
        return state.map((item) =>
          item.lineId === existingItem.lineId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      const newCartItem = {
        lineId: crypto.randomUUID(),
        productId: incomingItem.id,
        name: incomingItem.name,
        price: incomingItem.price,
        image: incomingItem.image,
        quantity: 1,
        customizations: [],
      };

      return [...state, newCartItem];
    }

    case "REMOVE_ITEM": {
      return state.filter((item) => item.lineId !== action.payload);
    }

    case "UPDATE_QTY": {
      return state
        .map((item) =>
          item.lineId === action.payload.lineId
            ? { ...item, quantity: item.quantity + action.payload.amount }
            : item,
        )
        .filter((item) => item.quantity > 0);
    }

    case "CLEAR_CART": {
      return [];
    }

    default:
      return state;
  }
};
