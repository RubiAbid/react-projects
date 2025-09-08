import React from 'react'

const CardCheck = ({ pokemonData }) => {
  return (
  

 <div className=' shadow p-4 rounded text-center bg-amber-100 flex flex-col items-center w-[200px] gap-3'>
      <img 
        src={pokemonData.sprites.other['dream_world'].front_default} 
        alt={pokemonData.name}
        className='w-[100px] h-[100px] mb-2'
      />
      <p className="font-bold capitalize text-3xl">{pokemonData.name}</p>
      <p className="text-gray-700 text-sm">Height: {pokemonData.height}</p>
      <p className="text-gray-700 text-sm">Weight: {pokemonData.weight}</p>
      <p className="text-gray-700 text-sm">Speed: {pokemonData.stats[5].base_stat}</p>
    <p>
  Abilities: {pokemonData.abilities.map((val) => val.ability.name).join(", ")}
</p>
<p>Experience:{pokemonData.base_experience}</p>
    </div>
   
  )
}

export default CardCheck
