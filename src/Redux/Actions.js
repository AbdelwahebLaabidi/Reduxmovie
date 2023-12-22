import { ADDMOVIE, DELETEMOVIE, EDITMOVIE, HANDLECHANGEMENT, HANDLERATE, RESETFILTER } from "./ActionTypes"

export const addMovie =(payload)=>{
    return(
        
        {
            type : ADDMOVIE,
            payload
        }
    )
}

export const deleteMovie=(payload)=>{
    return(
        {
            type : DELETEMOVIE,
            payload
        }
    )
}

export const handleChangement=(payload)=>{
    return(
        {
            type : HANDLECHANGEMENT,
            payload
        }
    )
}

export const handleRate=(payload)=>{
    return(
        {
            type :HANDLERATE,
            payload
        }
    )
}

export const resetFilter=()=>{
    return(
        {
            type: RESETFILTER
        }
    )
}

export const editMovie=(payload)=>{
    return(
        {
            type : EDITMOVIE,
            payload
        }
    )
}