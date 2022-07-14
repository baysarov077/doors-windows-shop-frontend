import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("get/todos", async (_, thunkApi) => {
  try {
    const res = await fetch('http://localhost:4000/posts')
    const data = await res.json()
    return thunkApi.fulfillWithValue(data)
  } catch (error) {
    return thunkApi.rejectWithValue(error + ' :getPosts')
  }
})

export const createPosts = createAsyncThunk("add/posts", async ({image, titleValue, textValue}, thunkApi) => {
  try {
    const formData = new FormData()
    formData.append('img', image)
    formData.append('title', titleValue)
    formData.append('text', textValue)
    const res = await fetch('http://localhost:4000/posts', {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    return thunkApi.fulfillWithValue(data)
  } catch (error) {
    return thunkApi.rejectWithValue(error + ': createPosts')
  }
})

export const deletePosts = createAsyncThunk("delete/posts", async (id, thunkApi) => {
  try {
    const res = await fetch(`http://localhost:4000/posts/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json()
    return thunkApi.fulfillWithValue(data)
  } catch (error) {
    return thunkApi.rejectWithValue(error + ': deletePosts')
  }
})