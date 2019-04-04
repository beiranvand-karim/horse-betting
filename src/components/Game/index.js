import React from "react"
import GameUpcomingList from "../GameUpcomingList"

export const Game = ({data, gameError, gameLoading, gameData, gameId, expandGame}) => {
   return <div>
      <h1>upcoming games: </h1>
      <GameUpcomingList gameError={gameError}
                        gameLoading={gameLoading}
                        gameData={gameData}
                        gameId={gameId}
                        expandGame={expandGame}
                        gameList={data.upcoming} />
   </div>
};
export default Game