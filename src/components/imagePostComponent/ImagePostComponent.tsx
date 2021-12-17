import './imagePostComponent.css'
import { decodeImageUrl } from '../../utils/decodeImage'

type Props = { image: string }
const ImagePostComponent = (props: Props): JSX.Element => {
  const { image } = props

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
