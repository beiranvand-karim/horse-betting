import React from "react"
import RaceList from "../RaceList"

export function GameDetailPreview({gameData}) {
   return <div>
      <h4>game type: {gameData['@type']}</h4>
      <RaceList raceList={gameData.races}/>
   </div>
}
export default GameDetailPreview