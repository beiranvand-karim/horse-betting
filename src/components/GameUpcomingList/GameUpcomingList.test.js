/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {GameUpcomingList} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<GameUpcomingList/>', () => {
   const gameList = [
      {
         "id": "V4_2019-04-04_6_6",
         "startTime": "2019-04-04T20:14:00",
      },
      {
         "id": "V4_2019-04-04_32_6",
         "startTime": "2019-04-04T20:22:00",
      }
   ];
   it('should render without crashing', () => {
      shallow(<GameUpcomingList gameList={gameList}/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><GameUpcomingList gameList={gameList}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});