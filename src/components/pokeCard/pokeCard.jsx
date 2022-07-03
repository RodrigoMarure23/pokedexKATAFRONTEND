import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import "./pokeCard.styles.css";


const PokeCard = ({ pokemon}) => {
  const  {name}  = pokemon;
  const [datos,setDatos]=useState([])

  useEffect (()=>{
    fetch(pokemon.url)
    .then(res=>res.json())
    .then((pokedatos)=>{
      setDatos({
        id:pokedatos.id,
        image:pokedatos.sprites.front_default
      })
      
    }
    )

  },[datos])

  return (
    
      <Link style={{textDecoration:'none', color:'black'}} className="card-container" to={`/pokemones/${name}/`}>

      <img src={datos.image} alt="pokemon" />
      <h2>{name}</h2>
      </Link>
      
    
    
  );
};

export default PokeCard;
