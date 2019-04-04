import React from "react"
import GameUpcomingList from "../GameUpcomingList"

export const Game = ({data}) => {
   return <div>
      <h1>upcoming games: </h1>
      <GameUpcomingList gameList={data.upcoming} />
   </div>
};
export default Game