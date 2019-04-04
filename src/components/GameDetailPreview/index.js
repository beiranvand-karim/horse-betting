import React from "react"

export function GameDetailPreview({gameData}) {
   return <h4>game type: {gameData['@type']}</h4>
}
export default GameDetailPreview