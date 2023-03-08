
import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'


const Countries = () => {
  const [countries , setCountries] = useState([])
  const [searchText,setSearchText]=useState('')
  const [filterRegion,setFilterRegion] =useState('')

  const regions = [
    {
      name : "Europe"
    },
    {
      name : "Africa"
    },
    {
      name : "Asia"
    },
    {
      name : "Americas"
    },
    {
      name : "Oceania"
    },
    {
      name : "Antarctic"
    },
  ]


  useEffect(()=>{
    const getCountries = async()=> {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all')
        const data = await res.json()
        setCountries(data)
      }catch(error){
        console.error(error)
      }
    }
    getCountries()
  },[])

 {/*_______Search function______*/}
  async function searchCounty(){
    try{
      const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
      const data = await res.json()
      setCountries(data)
    }catch(error){
      console.error(error)
    }
  }
  function handleSearchCountry(e) {
    e.preventDefault()
    searchCounty()
  }


  {/*_______Filter function________*/}
  async function filterByRegion(region){
    try{
      const res = await fetch( `https://restcountries.com/v3.1/region/${region}`)
      const data = await res.json()
      setCountries(data)
    }catch(error){
    console.error(error)
    }
  }
  function handleFilterByRegion(e) {
    e.preventDefault()
    filterByRegion()
  }


return (
    <div>

      {/*Navbar */}
      <div className='flex justify-between bg-blue-700 p-2 '>
       
        <form onSubmit={handleSearchCountry} >   
            <div>
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input 
                  value={searchText}
                  onChange={(e)=> setSearchText(e.target.value)} 
                  type="search" id="search-by-name" className="block outline-0 w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                  
              </div>
            </div>
        </form>

        <form onSubmit={handleFilterByRegion}>
          <select 
            value={regions.name}
            onChange={(e)=>filterByRegion(e.target.value)}
            defaultValue={'DEFAULT'} id="filter-by-region" className="outline-0 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-sm:invisible">
            <option value="DEFAULT" disabled>Region : </option>
              {regions.map((region,index)=> (
                <option key={index} value={region.name}>{region.name}</option>
              ))}
          </select>
         </form> 
           
      </div>
      {/*End of navbar */}


      {/*Countries*/}
      {countries ? (
        <section className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-items-center' >
          {countries.map((country)=> (
            <CountryCard key={country.name.common} {...country}/>
          ))}
        </section>
        
      ) : (
        <h1 className='text-gray flex justify-center items-center uppercase tracking-wide text-center h-screen'>
           Loading...
        </h1>
      )}
      {/*Countries*/}
 
       
    </div>
  )
}

export default Countries