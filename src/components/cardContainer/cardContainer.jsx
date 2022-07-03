import PokeCard from '../pokeCard/pokeCard'
import './cardContainer.styles.css'

const CardContainer = ({pokemones,datospokemon})=>{


    return(
        <div className="contenedorpokecartas" >
         {pokemones.map(pokemon=>
            {
                return <PokeCard key={pokemon.name} pokemon={pokemon} datospokemon={datospokemon}/>
            })} 
     
    </div>
    )
    

}
export default CardContainer