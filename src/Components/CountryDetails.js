import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


function CountryDetails() {

    const [country,setCountry] = useState([])
    const {name} = useParams() //getting country name 
    useEffect(()=>{
        const getSingleCountry = async()=> {
            try {
                const res = await fetch(`https://restcountries.com/v3.1/name/${name}`)
                const data = await res.json()
                setCountry(data)
                
            }catch(error){
                console.error(error)
            }
        }
        getSingleCountry()
        
    },[name])

  return (
    <div className="p-10 md:py-0 max-w-7xl mx-auto ">
        {country.map((item)=> (


          <div>
            <div className='flex items-center justify-center'>
             
             </div>
      
          <article key={item.population}  className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center mt-16">
            {/* Flage */}
              <div class="relative  overflow-hidden  bg-no-repeat">
              <a href={item.maps.googleMaps} target='_blank'><img src={item.flags.svg} alt={item.name.common} className='transition duration-300 ease-in-out hover:scale-110 hover:opacity-80 bg-cover '/></a>
              </div>
            {/* Details */}
              <div>
                {/* informations */}
                <div className='mb-4'>
                <h1 className="mb-8 font-bold text-gray-900 dark:text-white text-4xl lg:text-6xl">{item.name.official} </h1>
                   <h1 className='font-bold'>Informations : </h1>
                    <ul className=" flex flex-col items-start justify-start gap-2 text-slate-700 dark:text-gray-400">
                        <li>Capital: {item.capital[0]}</li>
                        <li>Region: {item.region}</li>
                        <li>Subregion: {item.subregion}</li>
                        <li>Population: {item.population.toLocaleString()}</li>
                        {/* <li>Map :<a href={item.maps.googleMaps}> See pam</a> </li> */}
                    </ul>
                </div>
                {/* Languages */}
                <div className='mb-4'>
                    <h1 className='font-bold'>Language : </h1>
                    {item.languages ? (
                        <ul className='flex'>
                          { Object.values(item.languages).map((elem, i) => (
                            <li key={i} className='shadow p-2 mx-1'>
                             {elem}
                            </li> ))}
               
                              
                        </ul>
                    ) : (<h3>No informations</h3>)} 
                </div>

                {/* Borders */}
                <div>
                    <h1 className='font-bold'>Borders : </h1>
                    {item.borders ? (
                        <ul className='flex'>
                            {item.borders.map((border,index)=>(
                                <li key={index} className='shadow p-2 mx-1'>{border}</li>
                            ))}
                        </ul>
                    ) : (<h3>No borders</h3>)}
                </div>
                {/* currencies */}
                <div className='mt-4'>
                    <h1 className='font-bold'>Currensies : </h1>
                    {item.currencies ? (
                        <ul className='flex'>
                          { Object.keys(item.currencies).map((elem, i) => (
                            <li key={i} className='shadow p-2 mx-1'>
                             {elem}
                            </li> ))}
               
                              
                        </ul>
                    ) : (<h3>No informations</h3>)} 
                </div>
              </div>
            </article>
             {/* Going back */}
             <Link to="/Countries__Rest_API" className="inline-block mt-8 bg-white py-2 px-6 rounded shadow text-gray-700 hover:bg-gray-200 transition-all duration-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-400">
                  &larr; Back
                </Link>
          </div>
          
        ))}
      
    </div>
  )
}

export default CountryDetails


