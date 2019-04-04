import React from "react"

export function RaceStartListItem({start}) {
   return <div>
      <h5>start number: {start.number}</h5>
      <h5>horse name: {start.horse.name}</h5>
      <h5>driver first name: {start.driver.firstName} {start.driver.lastName}</h5>
      <h5>horse father: {start.horse.pedigree.father.name}</h5>
   </div>
}
export default RaceStartListItem