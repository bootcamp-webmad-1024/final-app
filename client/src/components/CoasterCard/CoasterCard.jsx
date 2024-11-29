import { Link } from 'react-router-dom'
import './CoasterCard.css'
import { Button, Card, ButtonGroup } from "react-bootstrap"
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'

const CoasterCard = ({ _id, title, imageUrl, owner }) => {

    const { loggedUser } = useContext(AuthContext)

    return (
        <article className='CoasterCard mb-3'>
            <Card>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="d-grid">

                        {

                            owner && owner === loggedUser?._id ?
                                <>
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant='dark' size='sm' as={Link} to={`/detalles/${_id}`}>Ver detalles</Button>
                                        <Button variant='danger' size='sm' onClick={() => alert('te lo curras')}>Eliminar</Button>
                                    </ButtonGroup>
                                </>
                                :
                                <>
                                    <Button variant='dark' size='sm' as={Link} to={`/detalles/${_id}`}>Ver detalles</Button>
                                </>
                        }
                    </div>
                </Card.Body>
            </Card>
        </article>
    )
}

export default CoasterCard