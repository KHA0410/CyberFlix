import { createSlice } from '@reduxjs/toolkit'
let dataJson = JSON.parse(localStorage.getItem("USER_LOGIN"))
const initialState = {
    user: dataJson,
}

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser : (state, action) => {
        state.user = action.payload
    }
  }
});

export const {setUser} = userSlice.actions

export default userSlice.reducer