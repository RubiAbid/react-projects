import React from 'react'

const CardCheck = ({ pokemonData }) => {
  return (
    <div className='bg-amber-100 shadow p-4 rounded text-center flex flex-col items-center w-full sm:w-[180px] md:w-[200px] lg:w-[220px] gap-3 transition-transform transform hover:scale-105'>
      
      <img 
        src={pokemonData.sprites.other['dream_world'].front_default} 
        alt={pokemonData.name}
        className='w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-2'
      />

      <p className="font-bold capitalize text-xl sm:text-2xl md:text-3xl">{pokemonData.name}</p>
      <p className="text-gray-700 text-sm">Height: {pokemonData.height}</p>
      <p className="text-gray-700 text-sm">Weight: {pokemonData.weight}</p>
      <p className="text-gray-700 text-sm">Speed: {pokemonData.stats[5].base_stat}</p>
      <p className="text-gray-700 text-sm">
        Abilities: {pokemonData.abilities.map((val) => val.ability.name).join(", ")}
      </p>
      <p className="text-gray-700 text-sm">Experience: {pokemonData.base_experience}</p>
    </div>
  )
}

export default CardCheck
