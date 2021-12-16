import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Posts } from 'types/post'
import { getPosts } from '../api/posts'

const initialState = { posts: {}, isLoadingPosts: false, hasErrorPosts: false }

export const loadPosts = createAsyncThunk('posts/getPosts', getPosts)

export const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loadPosts.fulfilled, (state, action: PayloadAction<Posts>) => {
        state.posts = action.payload
        state.isLoadingPosts = false
        state.hasErrorPosts = false
      })
      .addCase(loadPosts.pending, state => {
        state.isLoadingPosts = true
        state.hasErrorPosts = false
      })
      .addCase(loadPosts.rejected, state => {
        state.isLoadingPosts = false
        state.hasErrorPosts = true
      })
  },
})

export default posts.reducer
