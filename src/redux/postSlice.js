import { createSlice } from "@reduxjs/toolkit";

const initialState = []
export const postSlice = createSlice({
    name: "Post",
    initialState,
    reducers: {
        postAdd: (state, action) => {
            console.log('postAdd called with state:', state, 'and action:', action);
            // state.push(action.payload)
            state = [...state, action.payload]
            console.log('postAdd updated state:', state);
        }
    }
})

export const { postAdd } = postSlice.actions;
export default postSlice.reducer
