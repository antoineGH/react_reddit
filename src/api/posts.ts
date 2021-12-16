import { Posts, DataBloated } from '../types/post'

export const getPosts = async (): Promise<Posts> => {
  const data = await fetch('https://www.reddit.com/r/CAKEWIN.json')
  const json = await data.json()

  return new Promise((resolve, reject) => {
    if (json) {
      const postsFiltered = json.data.children.map((elem: DataBloated) => {
        return elem.data
      })
      json.hasOwnProperty('kind') && resolve(postsFiltered)
    }
    reject()
  })
}
