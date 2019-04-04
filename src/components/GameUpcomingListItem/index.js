import React from "react"
import GameDetail from "../GameDetail"

function determineButtonSign(isPlus) {
   return isPlus ? '-' : '+'
}

export function GameUpcomingListItem({game, gameError, gameLoading, gameData, gameId, expandGame}) {
   return <div>
      <h4>id: {game.id}</h4>
      <h5>start time: {game.startTime}</h5>
      <button onClick={() => expandGame(game.id)}>{determineButtonSign(game.id === gameId)}</button>
      {(gameId === game.id) && (<GameDetail gameError={gameError} gameLoading={gameLoading} gameData={gameData}/>)}
      <hr/>
   </div>
}

export default GameUpcomingListItem