import Results from '@/components/Results';
import React from 'react'

async function SearchPage({params}) {
    const searchTerm = params.searchTerm;

    const res = await fetch(`https:/api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1include_adult=false`)

    const data = await res.json();
    const results = data.results;
//  console.log(results)
  return (
    <div>
      {
        results && results.length==0 &&
            <h1 className='text-center pt-6'> no result Found</h1>
        
      }
      {
        results && <Results results={results}/>
      }

    </div>
  )
}

export default SearchPage
