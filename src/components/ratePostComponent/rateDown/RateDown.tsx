import { DownSquareOutlined } from '@ant-design/icons'
import { vote } from '../../../types/post'

type Props = {
  vote: vote
  setVote: React.Dispatch<React.SetStateAction<vote>>
}

const RateDown = (props: Props): JSX.Element => {
  const { vote, setVote } = props

  const handleVote = () => {
    if (typeof vote === 'boolean') {
      setVote('')
      return
    }
    setVote(false)
  }

  return (
    <DownSquareOutlined
      onClick={() => handleVote()}
      style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}
      className={
        typeof vote === 'boolean' ? (vote ? 'plain' : 'down-red') : 'plain'
      }
    />
  )
}

export default RateDown
