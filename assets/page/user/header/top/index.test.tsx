import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import store from "store";

import Top from "./index";

describe("Top Header Component", () => {
    test("Snapshot Testing", () => {
        const component = renderer.create(<Provider store={store}><Top /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});