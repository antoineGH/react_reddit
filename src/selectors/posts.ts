import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store'
import { PostsSlice } from '../types/post'

export const getPosts = (state: RootState) => state.posts
export const getPostsSelector = createSelector(
  getPosts,
  (slice: PostsSlice) => slice?.posts,
)
export const getIsLoadingPosts = createSelector(
  getPosts,
  (slice: PostsSlice) => slice?.isLoadingPosts,
)
export const getHasErrorPosts = createSelector(
  getPosts,
  (slice: PostsSlice) => slice?.hasErrorPosts,
)
