import { useState } from "react"

export default function Player({ initialName, symbol}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing); //updating state based on old state correctly
  }

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  }
  return (
    <li>
      <span className="player">
        {isEditing ? <input type="text" required value={playerName} onChange={handleChange}/> :  <span className="player-name">{playerName}</span>}     
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save': 'Edit'}</button>
    </li>
  )
}