import React from "react"
import GameUpcomingListItem from "../GameUpcomingListItem"

export const GameUpcomingList = ({gameList, gameError, gameLoading, gameData, gameId, expandGame}) => {
   return gameList.map((game, index) => <GameUpcomingListItem gameError={gameError}
                                                              gameLoading={gameLoading}
                                                              gameData={gameData}
                                                              gameId={gameId}
                                                              expandGame={expandGame}
                                                              key={index}
                                                              game={game}/>)
};
export default GameUpcomingList