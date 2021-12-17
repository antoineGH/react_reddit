import { useEffect } from 'react'
import PostComponent from 'components/postComponent/PostComponent'
import { loadPosts } from 'reducers/posts'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import {
  getPostsSelector,
  getIsLoadingPosts,
  getHasErrorPosts,
} from 'selectors/posts'

const PostsComponent = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(getPostsSelector)
  const isLoadingPosts = useAppSelector(getIsLoadingPosts)
  const hasErrorPosts = useAppSelector(getHasErrorPosts)

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  return (
    <>
      {hasErrorPosts ? (
        ''
      ) : isLoadingPosts ? (
        <p>loading Posts</p>
      ) : (
        Object.values(posts).map(post => {
          return <PostComponent key={post.id} post={post} />
        })
      )}
    </>
  )
}

export default PostsComponent
