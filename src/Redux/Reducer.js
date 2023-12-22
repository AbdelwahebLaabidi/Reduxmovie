import { ADDMOVIE, DELETEMOVIE, EDITMOVIE, HANDLECHANGEMENT, HANDLERATE, RESETFILTER } from "./ActionTypes"

const initialState = {
    movies : [
        {titre : "Insaisissables", description : "« Les Quatre Cavaliers », un groupe de brillants magiciens et illusionnistes, viennent de donner deux spectacles de magie époustouflants : le premier en braquant une banque sur un autre continent, le deuxième en transférant la fortune d’un banquier véreux sur les comptes en banque du public.", posterURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREOz488Ms_yU3-OyZRR4GG8awxwPkPy0zgvWVzba6GyXQ-Vied", rating : 4, id : Math.random()},
        {titre : "Maman, j'ai raté l'avion !", description : "La famille McCallister a décidé de passer les fêtes de Noël à Paris. Seulement Kate et Peter McCallister s'aperçoivent dans l'avion qu'il leur manque le plus jeune de leurs enfants, Kevin, âgé de neuf ans.", posterURL :"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ5kAcQgbXrp1r8do3eMGMwxr7xKI2ACOELTiCypnBfZasM07TT", rating : 5, id : Math.random()},
        {titre : "John Wick : Chapitre 4", description : "John Wick affronte ses adversaires les plus mortels dans le quatrième volet de la série. Le prix de sa tête ne cessant d'augmenter, Wick mène son combat à l'échelle mondiale en recherchant les acteurs les plus puissants de la pègre", posterURL :"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSNKuvVFzUBa90mu5o5oX9yRQOTQSMGyvW9AQy3YCv34r7pFhic", rating : 3, id : Math.random()},
        {titre : "Le Secret de la cité perdue", description : "L'auteure recluse Loretta Sage écrit sur des lieux exotiques dans ses romans d'aventures, qui présentent un beau modèle de couverture nommé Alan. Lors d'une tournée de promotion de son nouveau livre avec Alan", posterURL :"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKJV1ZcY6ZQelTfhB7BGZ_V6wdDkSKFiAl60tfkmMKNS0giU1C", rating : 2, id : Math.random()}
    ],
    rate : 0,
    changement : ''
}

const Reducer =(state = initialState, action)=>{
switch (action.type) {

    case ADDMOVIE : return {...state, movies : [...state.movies, action.payload]}
    case DELETEMOVIE : return {...state, movies : state.movies.filter((el,i,t)=> el.id !== action.payload )}
    case HANDLECHANGEMENT : return {...state, changement : action.payload}
    case HANDLERATE : return {...state, rate : action.payload}
    case RESETFILTER : return {...state, rate : 0, changement :''}
    case EDITMOVIE : return {...state, movies : state.movies.map((el,i,t)=> el.id == action.payload.id ? {...el,...action.payload} : el)}
    default: return state
}
}

export default Reducer