import React from "react"
import GameUpcomingListItem from "../GameUpcomingListItem"

export const GameUpcomingList = ({gameList}) => {
   return gameList.map((game, index) => <GameUpcomingListItem key={index} game={game}/>)
};
export default GameUpcomingList