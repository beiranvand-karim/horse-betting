import React from "react"
import RaceStartListItem from "../RaceStartListItem"

export function RaceStartList({startList}) {
   return startList.map((start, index) => <RaceStartListItem start={start} key={index} />)
}
export default RaceStartList