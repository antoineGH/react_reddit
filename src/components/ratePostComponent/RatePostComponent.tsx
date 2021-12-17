import { useState } from 'react'
import { Row } from 'antd'
import { vote } from 'types/post'
import RateCount from './rateCount/RateCount'
import RateUp from './rateUp/RateUp'
import RateDown from './rateDown/RateDown'
import './ratePostComponent.css'

type Props = { id: string; ups: number }
const RatePostComponent = (props: Props): JSX.Element => {
  const { id, ups } = props
  const [vote, setVote] = useState<vote>('')

  return (
    <>
      <Row>
        <RateUp id={id} vote={vote} setVote={setVote} />
      </Row>
      <Row>
        <RateCount count={ups} vote={vote} />
      </Row>
      <Row>
        <RateDown id={id} vote={vote} setVote={setVote} />
      </Row>
    </>
  )
}

export default RatePostComponent
