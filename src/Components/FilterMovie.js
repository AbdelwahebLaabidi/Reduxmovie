import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangement, handleRate, resetFilter } from '../Redux/Actions';

const FilterMovie =()=>{
    const rate = useSelector(state=>state.rate)
    const changement= useSelector(state=>state.changement)

    const dispatch = useDispatch()

    return(
        <div>
                <input value={changement} onChange={(e)=>dispatch(handleChangement(e.target.value))}/>
                <Rating value={rate} onChange={(e)=>dispatch(handleRate(e.target.value))}/>
                <button onClick={()=>dispatch(resetFilter())} >Reset</button>
        </div>
    )
}

export default FilterMovie