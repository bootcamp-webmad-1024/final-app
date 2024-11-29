import { Button, Container, Modal } from 'react-bootstrap'
import CoastersList from '../../components/CoastersList/CoastersList.jsx'
import { useContext, useEffect, useState } from 'react'
import coasterServices from '../../services/coaster.services.js'
import NewCoasterForm from '../../components/NewCoasterForm/NewCoasterForm.jsx'
import { AuthContext } from '../../contexts/auth.context.jsx'

const CoastersGalleryPage = () => {

    const [coasters, setCoasters] = useState([])
    const [showModal, setShowModal] = useState(false)

    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        fetchCoasters()
    }, [])

    const fetchCoasters = () => {
        coasterServices
            .fetchCoasters()
            .then(({ data }) => setCoasters(data))
            .catch(err => console.log(err))
    }

    const handleModalClose = () => {
        fetchCoasters()
        setShowModal(false)
    }

    return (
        <div className="CoastersGalleryPage">

            <Container>

                <h1>Galería de montañas rusas</h1>
                <hr />

                {
                    loggedUser && <Button variant='dark' onClick={() => setShowModal(true)}>Crear nueva</Button>
                }

                <CoastersList coasters={coasters} />

            </Container>



            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva montaña rusa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewCoasterForm onSubmit={handleModalClose} />
                </Modal.Body>
            </Modal>

        </div >
    )
}

export default CoastersGalleryPage