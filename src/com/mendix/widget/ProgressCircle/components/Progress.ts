import { Circle } from "progressbar.js";
import { Component, DOM, ReactNode } from "react";

import "../ui/ProgressCircle.css";

interface ProgressProps {
    percentage: number;
}

export class Progress extends Component<ProgressProps, {}> {
    private progressNode: ReactNode;
    private progressCircle: Circle;

    componentDidMount() {
        this.createProgressCircle();
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
            color: "#555",
            strokeWidth: 8,
            trailColor: "#eee",
            trailWidth: 8
        });
    }

    private setProgress(percentage: number) {
        if (!this.progressCircle) { this.createProgressCircle(); }
        this.progressCircle.setText(percentage + "%");
        this.progressCircle.animate(percentage / 100);
    }
}
