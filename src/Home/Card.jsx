import { useEffect, useState } from 'react';
import "../Home/card.css";
import { Icon } from '@iconify/react';
import pokeballIcon from '@iconify/icons-mdi/pokeball';

export function AddCard({id}) {

  const [pokemon, setPokemon] = useState({name: '', artwork:'', height:'', weight:'',})


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(response => response.json())
  .then( data => {
    setPokemon({
     name: data.name,
     artwork: data.sprites['front_default'],
     height: data.height,
     weight: data.weight,
    })
  })
  });

 
      return (
        <div className='card'>
          <div className='red'>
          <Icon className='cardIcon' icon={pokeballIcon} />
            <div className='image'> 
            <img src= {pokemon.artwork}/>
            </div></div>
          <div className='name'>Nome:{pokemon.name}</div>
          <div className='info'>Altura:{pokemon.height} |  Peso:{pokemon.weight}</div>
         

        </div>
      )
    
}

