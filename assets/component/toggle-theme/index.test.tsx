import React from "react";
import renderer from "react-test-renderer";

import {mount, shallow} from "enzyme";

import { Provider } from "react-redux";
import store from "store";

import ToggleTheme from "./index";

describe("ToggleTheme Component", () => {
    test("Snapshot Testing", () => {
        const component = renderer.create(<Provider store={store}><ToggleTheme /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});