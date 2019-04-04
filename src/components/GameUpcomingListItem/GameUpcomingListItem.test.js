/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {GameUpcomingListItem} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<GameUpcomingListItem/>', () => {
   const game = {
      "id": "V4_2019-04-04_6_6",
      "startTime": "2019-04-04T20:14:00",
   };

   it('should render without crashing', () => {
      shallow(<GameUpcomingListItem game={game}/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><GameUpcomingListItem game={game}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});