import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = false

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue},
    reducers: {
        changeTheme: (state) => {
            state.value = !state.value
        },
    },
})

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;