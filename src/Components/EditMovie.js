import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rating from '@mui/material/Rating';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addMovie, editMovie } from '../Redux/Actions';


const EditMovie =({el})=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [titre, setTitre]= useState(el.titre)
    const [description, setDescription]= useState(el.description)
    const [posterURL, setPosterURL]= useState(el.posterURL)
    const [rating, setRating] = useState(el.rating)

    const dispatch= useDispatch()
    const handleEdit=()=>{
        dispatch(editMovie({titre,description,posterURL,rating,id : el.id}))
        handleClose()
    }
    return(

        <div>
                <Button variant="primary" onClick={handleShow}>
            Edit Movie 
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Titre</Form.Label>
                <Form.Control value={titre} onChange={(e)=> setTitre(e.target.value)}  type="text" placeholder="Ajouter Film" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Ajouter Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Image</Form.Label>
                <Form.Control value={posterURL} onChange={(e)=> setPosterURL(e.target.value)} type="text" placeholder="Ajouter PosterURL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rating</Form.Label>
                <br/>
                <Rating value={rating} onChange={(e)=> setRating(e.target.value)} />
            </Form.Group>

            </Form>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button  variant="primary" onClick={handleEdit}>
                Edit
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default EditMovie