import React from "react";
import renderer from "react-test-renderer";

import {mount, shallow} from "enzyme";

import { Provider } from "react-redux";
import store from "store";

import Top from "./index";

describe("Top Header Component", () => {
    test("Snapshot Testing", () => {
        const component = renderer.create(<Provider store={store}><Top /></Provider>);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    test("SocialMedia component to be present", () => {
        let component = shallow(<Top />);
        expect(component.find('Memo(SocialMedia)').length).toBe(1);
    });
});