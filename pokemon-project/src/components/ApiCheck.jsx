import React, { useEffect, useState } from 'react'
import CardCheck from './CardCheck'


const ApiCheck = () => {
    const [search,setSearch]=useState("")
    const [api,setApi]=useState([])
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)

    const fetchApi=async()=>{
        try{
        let res=await fetch("https://pokeapi.co/api/v2/pokemon?limit=24")
        let data=await res.json()

          // Fetch detailed data for each Pokémon
        let deatiledData=data.results.map(async(currVAlue)=>{
            let res=await fetch(currVAlue.url)
            return res.json()
           
         
         } )

         let detailedResponse=await Promise.all(deatiledData)
         setApi(detailedResponse)
         setLoading(false)
          console.log(detailedResponse)
        
      
        }
        catch(err){
    console.log(err)
    setError(err)
    setLoading(false)
}

       
    }

    useEffect(()=>{
        fetchApi()
    },[])

if (loading) return (
  <div className='flex justify-center items-center'>
    <p className='text-3xl font-bold'>
        Loading...
    </p>
  </div>
)

if (error) return (
  <div className='flex justify-center items-center'>
    <p className='text-3xl font-bold'>
        {error.message}
    </p>
  </div>
)

const searchData = api.filter(element =>
    element.name.toLowerCase().includes(search.toLowerCase())
)

  return (
    <div className='flex flex-col justify-center items-center bg-orange-200'>
        <h1 className='text-3xl text-black font-bold  '>Let's Catch Pokemon</h1>
        <input type="text" value={search} placeholder='Search Pokemon...' 
        className='border-1 border-amber-200 bg-amber-100 rounded-md w-[230px] p-2 m-2'
        onChange={(e)=>{
            setSearch(e.target.value)
        }}
        />

<div>
    <ul className='flex flex-row gap-2 flex-wrap justify-center'>
        {
            searchData.map((currVal) => {
    return <CardCheck key={currVal.id} pokemonData={currVal} />
})
 
        }
    </ul>
</div>


    </div>
    
  )
}

export default ApiCheck