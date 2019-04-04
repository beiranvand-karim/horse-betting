import React from "react"

export const GameUpcomingListItem = ({game}) => {
   return <div>
      <h4>id: {game.id}</h4>
      <h5>start time: {game.startTime}</h5>
   </div>
};
export default GameUpcomingListItem