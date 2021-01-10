import {APP_VERSION, STORAGE, THEME, DEFAULT_THEME} from "./index";

describe("Const", () => {
    test("APP_VERSION testing", () => {
        expect(APP_VERSION).toBe("0.0.0");
    });
    test("STORAGE testing", () => {
        expect(STORAGE).toBe("VimalMenon");
    });
    test("THEME testing", () => {
        expect(THEME).toBe("theme");
    });
    test("DEFAULT_THEME testing", () => {
        expect(DEFAULT_THEME).toBe("dark");
    });
});