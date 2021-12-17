import { Card, Row, Col } from 'antd'
import TitlePostComponent from 'components/titlePostComponent/TitlePostComponent'
import RatePostComponent from 'components/ratePostComponent/RatePostComponent'
import ImagePostComponent from 'components/imagePostComponent/ImagePostComponent'
import FooterPostComponent from 'components/footerPostComponent/FooterPostComponent'
import './postComponent.css'
import { PostArray } from '../../types/post'

type Props = { post: PostArray }
const PostComponent = (props: Props): JSX.Element => {
  const { post } = props

  return (
    <>
      <Card className="card-post">
        <Row>
          <Col span={2} className="col-rate">
            <RatePostComponent ups={post.ups} />
          </Col>
          <Col span={22}>
            <Row>
              <Col>
                <TitlePostComponent title={post.title} />
              </Col>
            </Row>
            <Row>
              <Col>
                <ImagePostComponent
                  image={post.preview?.images[0]?.source?.url}
                />
              </Col>
            </Row>
            <Row>
              <FooterPostComponent
                author={post.author}
                num_comments={post.num_comments}
              />
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default PostComponent
