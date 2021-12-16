import { UpSquareOutlined } from '@ant-design/icons'
import { vote } from '../../../types/post'

type Props = {
  vote: vote
  setVote: React.Dispatch<React.SetStateAction<vote>>
}

const RateUp = (props: Props): JSX.Element => {
  const { vote, setVote } = props

  const handleVote = () => {
    if (typeof vote === 'boolean') {
      setVote('')
      return
    }
    setVote(true)
  }

  return (
    <UpSquareOutlined
      onClick={() => handleVote()}
      style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}
      className={typeof vote === 'boolean' ? (vote ? 'green' : 'red') : 'plain'}
    />
  )
}
export default RateUp
