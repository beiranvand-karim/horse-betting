/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {RaceStartList} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"
import game from "../../backend/game"

describe('<RaceStartList/>', () => {

   const startList = game.races[0].starts;

   it('should render without crashing', () => {
      shallow(<RaceStartList startList={startList}/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><RaceStartList startList={startList}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});
