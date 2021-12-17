import { Posts, DataBloated } from '../types/post'

export const getPosts = async (): Promise<Posts> => {
  const data = await fetch('https://www.reddit.com/r/technews.json')
  const json = await data.json()

  return new Promise((resolve, reject) => {
    if (json) {
      const posts = json.data.children.map((elem: DataBloated) => {
        return {
          author: elem?.data?.author,
          ups: elem?.data?.ups,
          title: elem?.data?.title,
          num_comments: elem?.data?.num_comments,
          image: elem?.data?.preview?.images[0]?.source?.url,
          created_utc: elem?.data?.created_utc,
        }
      })

      json.hasOwnProperty('kind') && resolve(posts)
    }
    reject()
  })
}
