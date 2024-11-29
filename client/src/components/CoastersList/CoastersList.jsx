import CoasterCard from '../CoasterCard/CoasterCard.jsx'
import { Row, Col } from 'react-bootstrap'

const CoastersList = ({ coasters }) => {

    return (
        <Row>
            {
                coasters.map(elm => {
                    return (
                        <Col lg={{ span: 3 }} md={{ span: 6 }}>
                            <CoasterCard {...elm} key={elm._id} />
                        </Col>
                    )
                })
            }
        </Row>
    )

}

export default CoastersList