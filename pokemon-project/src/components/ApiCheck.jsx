import React, { useEffect, useState } from 'react'
import CardCheck from './CardCheck'

const ApiCheck = () => {
    const [search, setSearch] = useState("")
    const [api, setApi] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchApi = async () => {
        try {
            let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24")
            let data = await res.json()

            // Fetch detailed data for each Pokémon
            let detailedData = data.results.map(async (currValue) => {
                let res = await fetch(currValue.url)
                return res.json()
            })

            let detailedResponse = await Promise.all(detailedData)
            setApi(detailedResponse)
            setLoading(false)
            console.log(detailedResponse)
        } catch (err) {
            console.log(err)
            setError(err)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    if (loading) return (
        <div className='flex justify-center items-center min-h-screen'>
            <p className='text-3xl font-bold'>Loading...</p>
        </div>
    )

    if (error) return (
        <div className='flex justify-center items-center min-h-screen'>
            <p className='text-3xl font-bold'>{error.message}</p>
        </div>
    )

    const searchData = api.filter(element =>
        element.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className='flex flex-col items-center bg-orange-200 min-h-screen p-4'>
            <h1 className='text-3xl text-black font-bold mb-4'>Let's Catch Pokemon</h1>
            <input
                type="text"
                value={search}
                placeholder='Search Pokemon...'
                className='border border-amber-300 bg-amber-100 rounded-md w-full max-w-xs px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-400'
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className='w-full flex justify-center'>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {searchData.map((currVal) => (
                        <CardCheck key={currVal.id} pokemonData={currVal} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ApiCheck
