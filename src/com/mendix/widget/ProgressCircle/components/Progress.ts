import * as classNames from "classnames";
import { Circle } from "progressbar.js";
import { Component, DOM, ReactNode } from "react";

import "../ui/ProgressCircle.css";

export interface ProgressProps {
    value: number;
    maximumValue?: number;
    textSize?: ProgressTextSize;
    animate?: boolean;
}

export type ProgressTextSize = "small" | "medium" | "large";

export class Progress extends Component<ProgressProps, {}> {
    static defaultProps: ProgressProps = {
        animate: true,
        maximumValue: 100,
        textSize: "medium",
        value: 0
    };
    private progressNode: ReactNode;
    private progressCircle: Circle;

    componentDidMount() {
        this.setProgress(this.props.value);
    }

    componentDidUpdate() {
        this.setProgress(this.props.value);
    }

    render() {
        return DOM.div({
            className: classNames("widget-progress-circle", "progress-circle-" + this.props.textSize),
            ref: (node: ReactNode) => { this.progressNode = node; }
        });
    }

    componentWillUnmount() {
        this.progressCircle.destroy();
    }

    private createProgressCircle() {
        this.progressCircle = new Circle(this.progressNode, {
            duration: this.props.animate ? 800 : -1,
            strokeWidth: 6,
            trailWidth: 6
        });
        this.progressCircle.path.className.baseVal = "widget-progress-path";
        this.progressCircle.trail.className.baseVal = "widget-trail-path";
    }

    private setProgress(value: number) {
        const highest = this.props.maximumValue;
        if (!this.progressCircle) { this.createProgressCircle(); }
        this.progressCircle.setText(value + "%");
        this.progressCircle.animate(value > highest ? 1 : value / highest);
    }
}
