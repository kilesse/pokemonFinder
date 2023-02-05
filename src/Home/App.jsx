import { useState } from 'react';
import { AddCard } from './Card';
import "./app.css";
import { Icon } from '@iconify/react';
import pokeballIcon from '@iconify/icons-mdi/pokeball';


function App() {
const [pokemonName, setPokemonName] = useState('')
const [monstrinho, setMonstrinho] = useState([])

  function handleAddPokemon() {
    const newPokemon = {
      name: pokemonName,
      time:new Date().toLocaleTimeString("pt-br", {
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit",
      })
    }
    setMonstrinho (prevState => [...prevState, newPokemon])
  };

    return (
    <div className='container'>
      <div className='top'>
        <Icon className='appIcon' icon={pokeballIcon} />

      <strong className='title'>Pokedex</strong>
      
       </div> 
      <input type="text" 
      placeholder='encontre seu pokemon'
      onChange={e => setPokemonName(e.target.value)}
      />
      <button type='button' onClick={handleAddPokemon}>Procurar</button>
   <div className='cards'>
   {monstrinho.map( monstrinho => (
        <AddCard 
        key={monstrinho.time}
        id={monstrinho.name}
        />
      ))
      }
   </div>
     

    </div>
  )
}
export default  App;

