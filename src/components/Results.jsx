import React from 'react'

function Results({results}) {
  return (
    <div>
        {
            results.map((result)=>{
                return <h3 key={result.title}>{result.title}</h3>
            })
        }
    </div>
  )
}

export default Results
