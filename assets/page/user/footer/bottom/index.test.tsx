import "jsdom-global/register";
import React from "react";
import renderer from "react-test-renderer";
import FooterBottom from "./index";
import {shallow} from "enzyme";

describe("SocialMedia Component", ()=> {
    it("Snapshot Testing", () => {
        const component = renderer.create(<FooterBottom />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
        expect(true).toBe(true);
    });
});