import React from "react"
import RaceStartList from "../RaceStartList"

export function RaceListItem({race}) {
   return <div>
      <h4>race number: {race.number}</h4>
      <h4>race startTime: {race.startTime}</h4>
      <RaceStartList startList={race.starts}/>
   </div>
}
export default RaceListItem