import { createSlice } from '@reduxjs/toolkit'
import { UIState } from '../types/redux'

const STATE: UIState = {
  cartIsVisible: true,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: STATE,
  reducers: {
    toggleCardVisibility (state: UIState): UIState {
      return {
        ...state,
        cartIsVisible: !state.cartIsVisible,
      }
    },
  },
})

export const UIActions = uiSlice.actions

export default uiSlice.reducer
