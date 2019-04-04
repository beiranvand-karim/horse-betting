/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {RaceStartListItem} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"
import game from "../../backend/game"

describe('<RaceStartListItem/>', () => {
   const start = game.races[0].starts[0];

   it('should render without crashing', () => {
      shallow(<RaceStartListItem start={start}/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><RaceStartListItem start={start}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});
