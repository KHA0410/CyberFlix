import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dsGheDangDat: []
}

const seatSlice = createSlice({
  name: "seatSlice",
  initialState,
  reducers: {
    // todo: handle select seat
    setDsGheDangDat: (state, action) => {
        state.dsGheDangDat = action.payload;
    }
  }
});

export const { setDsGheDangDat } = seatSlice.actions

export default seatSlice.reducer