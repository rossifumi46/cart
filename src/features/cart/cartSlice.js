import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    ids: [
    ],
    sum: 0,
    qty: 0
  },
  reducers: {
    add: (state, action) => {
      const { addId, sum } = action.payload
      const item = state.ids.find(item => item.id === addId)
      if (item) {
        item.qty +=1
      } else {
        state.ids.push({
          id: addId,
          qty: 1
        })
      }     
      state.sum += sum
      state.qty += 1
    },
    remove: (state, action) => {
      const { removeId, sum } = action.payload
      const item = state.ids.find(item => item.id === removeId)
      if (item && item.qty > 0) {
        item.qty -=1
        state.sum = state.sum - sum
        state.qty -= 1
        if (item.qty === 0) {
          state.ids = state.ids.filter(item => item.id !== removeId)
        }
      }
    },
    clear: (state) => {
      return {
        ids: [],
        sum: 0,
        qty: 0
      }
    }
  }
});

export const { add, remove, clear } = cartSlice.actions;

export default cartSlice.reducer