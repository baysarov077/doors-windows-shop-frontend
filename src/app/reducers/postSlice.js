import { createSlice } from "@reduxjs/toolkit";
import { getPosts, createPosts, deletePosts } from "./postCreator";

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: []
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPosts.fulfilled.type, (state, action) => {
      state.posts = action.payload
    })
    builder.addCase(createPosts.fulfilled.type, (state, action) => {
      state.posts.push(action.payload)
    })
    builder.addCase(deletePosts.fulfilled.type, (state, action) => {
      state.posts = state.posts.filter(item => item._id !== action.payload._id)
    })
  }
})

export default postSlice.reducer