import React, {useState} from 'react';
import HighScores from './HighScores';

function ScoreForm(props) {
  const {timer, isGameOver} = props;
  const [player, setPlayer] = useState('');
  const [loc, setLoc] = useState('');
  const [rank, setRank] = useState(0);
  const [highScores, setHighScores] = useState([])
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const queryScoresDb = async() => {
    let url = new URL('http://localhost:3000/scores'),
    params = {time: timer.ms(), player: player, location: loc}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    const response = await fetch(url)
    const data = await response.json()
    return data
  }

  const isShown = (boo) => {
    return boo === true ? 'flex' : 'none'
  }

  const isFormShown = () => {
    if (isGameOver===true && isFormSubmitted ===false) {
      return 'block'
    } else {
      return 'none'
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = await queryScoresDb();
    console.log(data['highScores']);
    setRank(data['rank']);
    setHighScores(data['highScores']);
    setIsFormSubmitted(true)
  }

  const handlePlayerChange = (e) => {
    setPlayer(e.target.value)
  }

  const handleLocChange = (e) => {
    setLoc(e.target.value)
  }

  const formStyle = {
    display: isFormShown()
  }

  const boxStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    background: 'gray',
    padding: '50px',
    display: isShown(isGameOver),
    flexDirection: 'column',
  }

  const highScoresStyle = {
    display: isShown(isFormSubmitted)
  }

  return(
    <div style={boxStyle}>
      <HighScores highScores={highScores} style={highScoresStyle}/>
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

export default ScoreForm