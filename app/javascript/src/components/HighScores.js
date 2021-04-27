import React from 'react';

function HighScores() {

  const queryScoresDb = async(ary) => {
    let url = new URL('http://localhost:3000/scores'),
    params = {first: 'John', last: 'Smith'}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url)
    const scores = await response.text()
    console.log(scores)
    return scores
  }

  queryScoresDb()

  return(
    <div></div>
  )
}

export default HighScores