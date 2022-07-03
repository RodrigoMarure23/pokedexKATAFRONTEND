import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './routes/layout/layout'
import logo from './logo.svg'
import AboutPokemon from './routes/aboutpokemon/aboutpokemon'
import Home from './routes/home/home'
import Pokemon from './routes/pokemones/pokemon'

import Layout from './routes/layout/layout'

const App =()=>{
  return(
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<AboutPokemon/>}/>
        <Route path='pokemones/:pokemonName' element={<Pokemon/>}/>

      </Route>
      <Route index path='/test' element={<AboutPokemon/>}/>
    </Routes>
  )
}

export default App
