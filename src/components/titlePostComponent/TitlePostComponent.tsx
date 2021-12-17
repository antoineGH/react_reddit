import './titlePostComponent.css'

type Props = { title: string | null }
const TitlePostComponent = (props: Props): JSX.Element => {
  const { title } = props
  return <p className="post-title">{title}</p>
}

export default TitlePostComponent
