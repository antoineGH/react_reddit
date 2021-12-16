import { useEffect } from 'react'
import PostComponent from 'components/postComponent/PostComponent'
import { loadPosts } from 'reducers/posts'
import { useAppDispatch } from '../../hooks/hooks'

const PostsComponent = (): JSX.Element => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log('UseEffect')
    dispatch(loadPosts())
  }, [])

  return (
    <>
      <PostComponent />
      <PostComponent />
    </>
  )
}

export default PostsComponent
