import { Row } from 'antd'
import './ratePostComponent.css'
import { UpSquareOutlined, DownSquareOutlined } from '@ant-design/icons'

const RatePostComponent = (): JSX.Element => {
  return (
    <>
      <Row>
        <UpSquareOutlined
          style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}
        />
      </Row>
      <Row>
        <p className="rate-count">38k</p>
      </Row>
      <Row>
        <DownSquareOutlined
          style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}
        />
      </Row>
    </>
  )
}

export default RatePostComponent
