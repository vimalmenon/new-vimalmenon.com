import React from "react";
import renderer from "react-test-renderer";

import Loading from "./index";

describe("Loading Component", ()=> {
    test("Snapshot Testing", () => {
        const component = renderer.create(<Loading />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});