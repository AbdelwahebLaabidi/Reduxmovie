import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rating from '@mui/material/Rating';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addMovie } from '../Redux/Actions';


const AddMovie =()=>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [titre, setTitre]= useState('')
    const [description, setDescription]= useState('')
    const [posterURL, setPosterURL]= useState('')
    const [rating, setRating] = useState(0)

    const dispatch= useDispatch()
    const handleAdd =()=>{
        dispatch(addMovie({titre,description,posterURL,rating, id: Math.random()}))
        handleClose()
    }
    return(

        <div>
                <Button variant="primary" onClick={handleShow}>
            Add Movie 
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Titre</Form.Label>
                <Form.Control onChange={(e)=> setTitre(e.target.value)}  type="text" placeholder="Ajouter Film" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Ajouter Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Image</Form.Label>
                <Form.Control onChange={(e)=> setPosterURL(e.target.value)} type="text" placeholder="Ajouter PosterURL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rating</Form.Label>
                <br/>
                <Rating onChange={(e)=> setRating(e.target.value)} />
            </Form.Group>

            </Form>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button  variant="primary" onClick={handleAdd}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default AddMovie