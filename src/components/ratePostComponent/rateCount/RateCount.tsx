import { vote } from '../../../types/post'

type Props = { count: number; vote: vote }

const RateCount = (props: Props): JSX.Element => {
  const { count, vote } = props
  switch (vote) {
    case '':
      return <p className="rate-count">{count}</p>

    case true:
      return <p className="rate-count green">{count}</p>

    default:
      return <p className="rate-count red">{count}</p>
  }
}

export default RateCount
