import "jsdom-global/register";
import React from "react";
import renderer from "react-test-renderer";
import FooterBottom from "./index";
import {mount, shallow} from "enzyme";

describe("SocialMedia Component", ()=> {
    test("Snapshot Testing", () => {
        const component = renderer.create(<FooterBottom />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    test("Footer : Version testing", () => {
        let component = mount(<FooterBottom />);
        expect(component.find('[data-testid="version"]').text()).toEqual("v0.0.0.a");
    });
});