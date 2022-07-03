import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const Pokemon=()=>{
    const {pokemonName}=useParams();
    const [pokemonData,setPokemonData]=useState();

    useEffect(()=>{
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(res=>res.json())
        .then(datosdelpokemon=>setPokemonData({
            imagen:datosdelpokemon.sprites.front_default,
            nombre:datosdelpokemon.name,
            peso:datosdelpokemon.weight,
            altura:datosdelpokemon.height,

            habilidades:datosdelpokemon.abilities[0].ability.name
        }))
    },[pokemonName])


    return(
        <>
           {pokemonData && (
            <>
                <img style={{height:'300px'}} src={pokemonData.imagen} alt="selfie pokemon" />
                <h1>Nombre: {pokemonData.nombre}</h1>
                <h1>Peso: {pokemonData.peso }</h1>
                <h1>Altura: {pokemonData.altura}</h1>
                <h1>Habilidad: {pokemonData.habilidades}</h1>
            </>
           )}
        </>
    )
}
export default Pokemon;