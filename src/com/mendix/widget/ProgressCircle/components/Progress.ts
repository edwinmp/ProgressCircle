import { DOM } from "react";

interface ProgressProps {
    percentage: number;
}

export const Progress = (props: ProgressProps) => DOM.div(null, props.percentage + "%");
