import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    value: [],
  },
  reducers: {
    addPost: (state, action) => {
      state.value.unshift(action.payload);
    },
    addAllPost: (state, action) => {
      let prev = state.value;
      let next = action.payload;

      for (var i = 0, l = prev.length; i < l; i++) {
        for (var j = 0, ll = next.length; j < ll; j++) {
          if (prev[i].id === next[j].id) {
            prev.splice(i, 1, next[j]);
            break;
          }
        }
      }

      state.value = next;
    },
  },
});

export const { addPost, addAllPost } = postSlice.actions;
export const selectPost = (state) => state.post.value;
export default postSlice.reducer;
