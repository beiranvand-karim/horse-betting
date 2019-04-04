/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {RaceListItem} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"
import game from "../../backend/game"

describe('<RaceListItem/>', () => {

   const race = game.races[0];

   it('should render without crashing', () => {
      shallow(<RaceListItem race={race}/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><RaceListItem race={race}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});
