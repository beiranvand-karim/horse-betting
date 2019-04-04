/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {RaceList} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"
import game from "../../backend/game"

describe('<RaceList/>', () => {

   const races = game.races;

   it('should render without crashing', () => {
      shallow(<RaceList raceList={races}/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><RaceList raceList={races}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});
