/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {GameDetailPreview} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"
import game from "../../backend/game"

describe('<GameDetailPreview/>', () => {
   const gameData = game;
   it('should render without crashing', () => {
      shallow(<GameDetailPreview gameData={gameData}/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><GameDetailPreview gameData={gameData}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});