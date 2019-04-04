import React from "react"
import Error from "../Error"
import Loading from "../Loading"
import GameDetailPreview from "../GameDetailPreview"

export function GameDetail({gameError, gameLoading, gameData}) {
   if (gameError) {
      return <Error error={gameError}/>
   }
   if (gameLoading) {
      return <Loading/>
   }
   if (gameData) {
      return <GameDetailPreview gameData={gameData}/>
   }
   return null
}
export default GameDetail