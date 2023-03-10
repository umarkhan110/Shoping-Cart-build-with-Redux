import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemQuantity: 0,
  items: [],
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    itemAdded: (state, action) => {
      state.itemQuantity++;
      state.items.push(action.payload);
    },
    itemRemoved: (state, action) => {
      // debugger
      state.itemQuantity--;
      state.items.splice(
        state.items.findIndex((arrow) => arrow.id === action.payload),
        1
      );
    },
  },
});
// module.exports = ItemSlice.reducer
// module.exports.itemAction = ItemSlice.action

export const { itemAdded, itemRemoved } = itemSlice.actions;
export default itemSlice.reducer;
