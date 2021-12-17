import { UpSquareOutlined } from '@ant-design/icons'
import { vote } from '../../../types/post'
import { useAppDispatch } from '../../../hooks/hooks'
import { voteStore } from '../../../reducers/posts'

type Props = {
  vote: vote
  setVote: React.Dispatch<React.SetStateAction<vote>>
  id: string
}

const RateUp = (props: Props): JSX.Element => {
  const dispatch = useAppDispatch()
  const { id, vote, setVote } = props

  const handleVote = () => {
    if (typeof vote === 'boolean') {
      setVote('')
      dispatch(voteStore({ id: id, vote: false }))
      return
    }
    setVote(true)
    dispatch(voteStore({ id: id, vote: true }))
  }

  return (
    <UpSquareOutlined
      onClick={() => handleVote()}
      style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}
      className={
        typeof vote === 'boolean' ? (vote ? 'up-green' : 'plain') : 'plain'
      }
    />
  )
}
export default RateUp
