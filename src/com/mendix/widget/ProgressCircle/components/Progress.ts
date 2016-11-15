import "../ui/circle.less";
import * as classNames from "classnames";
import { DOM } from "react";

interface ProgressProps {
    percentage: number;
}

export const Progress = (props: ProgressProps) =>
    DOM.div({ className: classNames("mx-progressbar", "c100", "p" + props.percentage, "center") },
        DOM.span(null, props.percentage + "%"),
        DOM.div({ className: "slice" },
            DOM.div({ className: "bar" }),
            DOM.div({ className: "fill" })
        )
    );
