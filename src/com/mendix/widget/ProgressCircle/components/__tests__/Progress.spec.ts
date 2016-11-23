import { shallow } from "enzyme";
import { DOM, createElement } from "react";

import * as progressbar from "progressbar.js";

import { Progress, ProgressProps } from "../Progress";

describe("Progress", () => {

    const render = (props: ProgressProps) => shallow(createElement(Progress, props));
    const spyOnCircle = () =>
        spyOn(progressbar, "Circle").and.callFake(() => {
            return new Circle(document.createElement("div"), {
                strokeWidth: 6,
                trailWidth: 6
            });
        });
    const Circle = progressbar.Circle;

    it("renders the structure correctly", () => {
        const progress = render({ value: 60 });

        expect(progress).toBeElement(DOM.div({ className: "widget-progress-circle" }));
    });

    it("creates a circle progress bar", () => {
        spyOnCircle();
        const progress = render({ value: 80 });
        let instance = progress.instance() as Progress;
        instance.componentDidMount();

        expect(progressbar.Circle).toHaveBeenCalled();
    });

    it("sets the progress percentage", () => {
        spyOn(progressbar.Circle.prototype, "setText").and.callThrough();
        const setText = progressbar.Circle.prototype.setText as jasmine.Spy;
        spyOnCircle();

        const progress = render({ animate: false, value: 80 });
        let instance = progress.instance() as Progress;
        instance.componentDidMount();

        expect(setText).toHaveBeenCalled();
    });

    it("updates the progress percentage when updated", () => {
        spyOn(progressbar.Circle.prototype, "setText").and.callThrough();
        const setText = progressbar.Circle.prototype.setText as jasmine.Spy;
        spyOnCircle();

        const progress = render({ value: 80 });
        let instance = progress.instance() as Progress;
        instance.componentDidMount();
        instance.componentDidUpdate();

        expect(setText).toHaveBeenCalled();
    });

    it("destroys progress circle on unmount", () => {
        spyOn(progressbar.Circle.prototype, "destroy").and.callThrough();
        const destroy = progressbar.Circle.prototype.destroy as jasmine.Spy;
        spyOnCircle();

        const progress = render({ value: 280 });
        let instance = progress.instance() as Progress;
        instance.componentDidMount();
        instance.componentWillUnmount();

        expect(destroy).toHaveBeenCalled();
    });

    describe("with text size small", () => {
        it("renders with the class progress-circle-small", () => {
            const progress = render({ textSize: "small", value: 20 });

            expect(progress.find(".progress-circle-small").length).toBe(1);
        });
    });

    describe("with text size medium", () => {
        it("renders with the class progress-circle-medium", () => {
            const progress = render({ textSize: "medium", value: 20 });

            expect(progress.find(".progress-circle-medium").length).toBe(1);
        });
    });

    describe("with text size large", () => {
        it("renders with the class progress-circle-large", () => {
            const progress = render({ textSize: "large", value: 20 });

            expect(progress.find(".progress-circle-large").length).toBe(1);
        });
    });
});
