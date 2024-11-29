import { Button, Container } from "react-bootstrap"
import NewCoasterForm from "../../components/NewCoasterForm/NewCoasterForm"
import { Link, useNavigate } from "react-router-dom"

const NewCoasterPage = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <h1>Nueva montaña rusa</h1>
            <hr />
            <NewCoasterForm onSubmit={() => navigate('/galeria')} />
            <hr />
            <Button as={Link} to={'/galeria'} variant="dark">Ir a la galería</Button>
        </Container>
    )
}

export default NewCoasterPage