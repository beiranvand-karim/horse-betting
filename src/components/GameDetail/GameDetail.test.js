/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {GameDetail} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<GameDetail/>', () => {
   it('should render without crashing', () => {
      shallow(<GameDetail/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><GameDetail/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});