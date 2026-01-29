import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Each item will be { product, quantity }
  },
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.product.name === product.name);

      if (existingItem) {
        // If product already exists, increase quantity
        existingItem.quantity += 1;
      } else {
        // Otherwise, add new product with quantity 1
        state.items.push({ product, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const productName = action.payload;
      state.items = state.items.filter(item => item.product.name !== productName);
    },
    updateQuantity: (state, action) => {
      const { productName, quantity } = action.payload;
      const existingItem = state.items.find(item => item.product.name === productName);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;