import './imagePostComponent.css'

type Props = { image: string }
const ImagePostComponent = (props: Props): JSX.Element => {
  const { image } = props

  const decodeImageUrl = (urlEncoded: string): string => {
    return urlEncoded.replace('amp;s', 's')
  }

  return (
    <>
      <img
        className="img-post"
        src={image && decodeImageUrl(image)}
        alt="picture_article"
      />
    </>
  )
}

export default ImagePostComponent
