import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import store from "store";

import SocialMedia from "./index";

describe("SocialMedia Component", ()=> {
    test("Snapshot Testing", () => {
        const component = renderer.create(<Provider store={store}><SocialMedia /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});