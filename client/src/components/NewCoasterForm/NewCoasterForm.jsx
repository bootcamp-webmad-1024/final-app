import { useState } from "react"
import { Form, Button, Row, Col } from "react-bootstrap"
import coasterServices from "../../services/coaster.services"

const NewCoasterForm = ({ onSubmit }) => {

    const [coasterData, setCoasterData] = useState({
        title: '',
        description: '',
        length: 0,
        inversions: 0,
        imageUrl: ''
    })

    const handleInputChange = e => {
        const { value, name } = e.currentTarget
        setCoasterData({ ...coasterData, [name]: value })
    }

    const handleCoasterSubmit = e => {
        e.preventDefault()

        coasterServices
            .saveCoaster(coasterData)
            .then(({ data }) => onSubmit())
            .catch(err => console.log(err))
    }

    return (
        <div className="NewCoasterForm">

            <Form onSubmit={handleCoasterSubmit}>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={coasterData.title} name="title" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" value={coasterData.description} name="description" onChange={handleInputChange} />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="inversions">
                            <Form.Label>Inversiones</Form.Label>
                            <Form.Control type="number" value={coasterData.inversions} name="inversions" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="length">
                            <Form.Label>Longitud</Form.Label>
                            <Form.Control type="number" value={coasterData.length} name="length" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>Imagen (URL)</Form.Label>
                            <Form.Control type="text" value={coasterData.imageUrl} name="imageUrl" onChange={handleInputChange} />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Crear montaña rusa</Button>
                </div>

            </Form>
        </div>
    )
}

export default NewCoasterForm