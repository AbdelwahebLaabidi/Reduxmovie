import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../Redux/Actions';
import { useState } from 'react';
import EditMovie from './EditMovie';

const CardMovie =({el})=>{

    const dispatch=useDispatch()
    const [show ,setShow]=useState(false)
    return(

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.posterURL} />
            <Card.Body>
                <Card.Title>{el.titre}</Card.Title>
                <Card.Text>{show ? el.description : el.description.substring(0,50)}</Card.Text>
                <Button variant= "secondary" onClick={()=>setShow(!show)}>{show ? 'Show Less': 'Show More'}</Button>
                <br/>
                <Rating  value={el.rating} readOnly />
                <br/>
                <Button onClick={()=>dispatch(deleteMovie(el.id))} variant= "danger">Delete</Button>
                <EditMovie el={el}/>
            </Card.Body>
            </Card>

    )
}

export default CardMovie