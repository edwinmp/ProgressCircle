import * as classNames from "classnames";
import { Circle } from "progressbar.js";
import { Component, DOM, ReactNode } from "react";

import "../ui/ProgressCircle.css";

export interface ProgressProps {
    percentage: number;
    textSize?: ProgressTextSize;
}

export type ProgressTextSize = "small" | "medium" | "large";

export class Progress extends Component<ProgressProps, {}> {
    static defaultProps: ProgressProps = {
        percentage: 0,
        textSize: "medium"
    };
    private progressNode: ReactNode;
    private progressCircle: Circle;

    componentDidMount() {
        this.setProgress(this.props.percentage);
    }

    componentDidUpdate() {
        this.setProgress(this.props.percentage);
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
            strokeWidth: 6,
            trailWidth: 6
        });
        this.progressCircle.path.className.baseVal = "widget-progress-path";
        this.progressCircle.trail.className.baseVal = "widget-trail-path";
    }

    private setProgress(percentage: number) {
        if (!this.progressCircle) { this.createProgressCircle(); }
        this.progressCircle.setText(percentage + "%");
        this.progressCircle.animate(percentage / 100);
    }
}
