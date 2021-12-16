import { Row, Col } from 'antd'
import { MessageOutlined } from '@ant-design/icons'
import './footerPostComponent.css'

const FooterPostComponent = (): JSX.Element => {
  return (
    <>
      <Row className="row-footer">
        <Col
          span={8}
          className="footer-author"
          style={{ backgroundColor: 'pink' }}
        >
          <p>NewOldSchoool</p>
        </Col>
        <Col
          className="footer-time"
          span={8}
          style={{ backgroundColor: 'orange' }}
        >
          <p className="footer-detail">20 hours ago</p>
        </Col>
        <Col
          className="footer-comments"
          span={8}
          style={{ backgroundColor: 'lightcyan' }}
        >
          <MessageOutlined style={{ color: 'var(--color-text-secondary)' }} />
          <p className="footer-detail">486</p>
        </Col>
      </Row>
    </>
  )
}

export default FooterPostComponent
