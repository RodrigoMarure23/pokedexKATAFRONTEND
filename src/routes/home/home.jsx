import { useState , useEffect} from "react";
import CardContainer from '../../components/cardContainer/cardContainer'
import SearchBox from "../../components/searchBox/searchBox";

const Home=()=>{
  const [pokemones,setPokemones]= useState([])
  const [searchField,setSearchField]=useState("");
  const [filteredPokemons,setFilteredPokemons]=useState(pokemones)


  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
    .then(res=>res.json())
    .then(res=>res.results)
    .then(pokemon=>{
      setPokemones(pokemon);
      console.log(pokemones)})
  },[]);


  
  useEffect(()=>{
    console.log('entro en el filtro de pokemones')
    const newFilteredPokemones = pokemones.filter(pokemon=>{
    return pokemon.name.toLowerCase().includes(searchField.toLowerCase())
  })
    
    setFilteredPokemons(newFilteredPokemones)
    console.log(filteredPokemons)
  },[pokemones,searchField])


  const filtrado=(event)=>{
    setSearchField(event.target.value)
  }

  
          
 
  return (
    <div className="App">
      <SearchBox onSearch={filtrado}></SearchBox>
      <CardContainer pokemones={filteredPokemons} ></CardContainer>
    </div>
  )
}

export default Home;