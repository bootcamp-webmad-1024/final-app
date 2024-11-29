import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import coasterServices from "../../services/coaster.services"

const CoasterDetailsPage = () => {

    const { id: coasterId } = useParams()

    const [coaster, setCoaster] = useState({})

    useEffect(() => {
        loadCoasterDetails()
    }, [])

    const loadCoasterDetails = () => {
        coasterServices
            .fetchOneCoaster(coasterId)
            .then(({ data }) => setCoaster(data))
            .catch(err => console.log(err))
    }

    return (
        <Container>

            <h1 className="mb-4">Detalles de {coaster.title}</h1>
            <hr />

            <Row>

                <Col md={{ span: 6, offset: 1 }}>
                    <h3>Especificaciones</h3>
                    <p>{coaster.description}</p>
                    <ul>
                        <li>Longitud: {coaster.length}</li>
                        <li>Inversiones: {coaster.inversions}</li>
                    </ul>
                    <hr />

                    <Link to="/galeria" className="btn btn-dark">Volver a la galería</Link>
                </Col>

                <Col md={{ span: 4 }}>
                    <img src={coaster.imageUrl} style={{ width: '100%' }} />
                </Col>

            </Row>

        </Container >
    )
}

export default CoasterDetailsPage