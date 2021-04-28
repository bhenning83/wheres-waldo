import React, {useState} from 'react';

function HighScores(props) {
  const {timer, isGameOver} = props;
  const [player, setPlayer] = useState('')
  const [loc, setLoc] = useState('')

  const queryScoresDb = async() => {
    let url = new URL('http://localhost:3000/scores'),
    params = {timer: timer.ms(), player: player, loc: loc}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url)
    const data = await response.text()
    return data
  }

  const isShown = () => {
    return isGameOver === true ? 'block' : 'none'
  }

  const formStyle = {
    // display: isShown()
    position: 'fixed',
    top: '50%',
    left: '50%',
    background: 'gray',
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = await queryScoresDb();
    console.log(data)
    setPlayer('');
  }

  const handlePlayerChange = (e) => {
    setPlayer(e.target.value)
  }

  const handleLocChange = (e) => {
    setLoc(e.target.value)
  }

  return(
    <div>
      <div>High Scores:</div>
      <form action="" style={formStyle} onSubmit={handleSubmit}>
        <label htmlFor="playerName">Name:</label>
        <input type="text" id='playerName' onChange={handlePlayerChange} />
        <label htmlFor="playerLoc">Location:</label>
        <input type="text" id='playerLoc' onChange={handleLocChange}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default HighScores