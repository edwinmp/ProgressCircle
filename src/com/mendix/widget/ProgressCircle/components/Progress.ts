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
        this.progressCircle = new Circle(this.progressNode, {
            color: "#FFEA82",
            strokeWidth: 6,
            trailColor: "#eee",
            trailWidth: 1
        });
        this.progressCircle.setText(this.props.percentage + "%");
        this.progressCircle.animate(this.props.percentage / 100);
    }

    render() {
        return DOM.div({
            className: "widget-progressbar",
            ref: (node: ReactNode) => this.progressNode = node
        });
    }
}
