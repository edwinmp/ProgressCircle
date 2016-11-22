import { Component, DOM, ReactNode } from "react";
import { Circle } from "progressbar.js"; // tslint:disable-line: ordered-imports

import "../ui/ProgressCircle.css";

interface ProgressProps {
    percentage: number;
}

export class Progress extends Component<ProgressProps, {}> {
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
            className: "widget-progressbar",
            ref: (node: ReactNode) => this.progressNode = node
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
