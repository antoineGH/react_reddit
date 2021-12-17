import { Row, Col } from 'antd'
import { MessageOutlined } from '@ant-design/icons'
import './footerPostComponent.css'

type Props = { author: string; num_comments: number }
const FooterPostComponent = (props: Props): JSX.Element => {
  const { author, num_comments } = props
  return (
    <>
      <Row className="row-footer">
        <Col span={8} className="footer-author">
          <p>{author}</p>
        </Col>
        <Col className="footer-time" span={8}>
          <p className="footer-detail">20 hours ago</p>
        </Col>
        <Col className="footer-comments" span={8}>
          <MessageOutlined style={{ color: 'var(--color-text-secondary)' }} />
          <p className="footer-detail">{num_comments}</p>
        </Col>
      </Row>
    </>
  )
}

export default FooterPostComponent
