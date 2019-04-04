import React from "react"
import RaceListItem from "../RaceListItem"

export function RaceList({raceList}) {
   return <div>
      <h3>race list</h3>
      {
         raceList.map((race, index) => <RaceListItem key={index} race={race}/>)
      }
   </div>
}
export default RaceList