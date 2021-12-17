import { DownSquareOutlined } from '@ant-design/icons'
import { vote } from '../../../types/post'
import { useAppDispatch } from '../../../hooks/hooks'
import { voteStore } from '../../../reducers/posts'

type Props = {
  vote: vote
  setVote: React.Dispatch<React.SetStateAction<vote>>
  id: string
}

const RateDown = (props: Props): JSX.Element => {
  const dispatch = useAppDispatch()
  const { id, vote, setVote } = props

  const handleVote = () => {
    if (typeof vote === 'boolean') {
      setVote('')
      dispatch(voteStore({ id: id, vote: true }))
      return
    }
    setVote(false)
    dispatch(voteStore({ id: id, vote: false }))
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
