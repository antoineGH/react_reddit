import { Card, Row, Col } from 'antd'
import TitlePostComponent from 'components/titlePostComponent/TitlePostComponent'
import RatePostComponent from 'components/ratePostComponent/RatePostComponent'
import ImagePostComponent from 'components/imagePostComponent/ImagePostComponent'
import FooterPostComponent from 'components/footerPostComponent/FooterPostComponent'
import './postComponent.css'

const PostComponent = (): JSX.Element => {
  return (
    <>
      <Card className="card-post">
        <Row>
          <Col span={2} className="col-rate">
            <RatePostComponent />
          </Col>
          <Col span={22}>
            <Row>
              <Col>
                <TitlePostComponent />
              </Col>
            </Row>
            <Row>
              <Col>
                <ImagePostComponent />
              </Col>
            </Row>
            <Row>
              <FooterPostComponent />
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default PostComponent
