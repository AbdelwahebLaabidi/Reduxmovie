import { useSelector } from "react-redux"
import CardMovie from "./CardMovie"
import FilterMovie from "./FilterMovie"
import AddMovie from "./AddMovie"

const ListMovie =()=>{

    const movies = useSelector(state=> state.movies)
    const rate = useSelector(state=> state.rate)
    const changement = useSelector(state=> state.changement)

    const h = movies.filter((el,i,t)=> el.titre.toUpperCase().includes(changement.toUpperCase()) && el.rating >= rate)
    return(
        <div>
            <div className='lol'>
                <FilterMovie/>
                <AddMovie/>
            </div>
            <div className="pop">
                {
                h.length ==0 ? <h1>Movie Not Found </h1> : h.map((el,i,t)=> <CardMovie el={el}/>)
                }
            </div>

        </div>
    )
}

export default ListMovie