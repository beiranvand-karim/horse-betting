/* global describe, it, jest, expect*/
import {shallow} from "enzyme"
import {Game} from "./"
import React from "react"
import renderer from "react-test-renderer"
import {MemoryRouter} from "react-router-dom"

describe('<Game/>', () => {

   const data = {
      "upcoming": [
         {
            "id": "V4_2019-04-04_6_6",
            "startTime": "2019-04-04T20:14:00"
         },
         {
            "id": "V4_2019-04-04_32_6",
            "startTime": "2019-04-04T20:22:00"
         }
      ]
   };

   it('should render without crashing', () => {
      shallow(<Game data={data}/>)
   });

   it('should matches the snapshot', () => {
      const tree = renderer.create(<MemoryRouter><Game data={data}/></MemoryRouter>).toJSON();
      expect(tree).toMatchSnapshot()
   });
});