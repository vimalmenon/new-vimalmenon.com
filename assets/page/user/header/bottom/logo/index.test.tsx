import "jsdom-global/register";
import React from "react";
import renderer from "react-test-renderer";
import FooterBottom from "./index";
import {mount, shallow} from "enzyme";

import { Provider } from "react-redux";
import store from "store";
import {
	BrowserRouter as Router
} from "react-router-dom";

describe("SocialMedia Component", ()=> {
    test("Snapshot Testing", () => {
        const component = renderer.create(<Provider store={store}><Router><FooterBottom /></Router></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});