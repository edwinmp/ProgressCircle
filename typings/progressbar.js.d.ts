// tslint:disable-next-line
declare namespace progressbar {

    export class Circle {
        constructor(node: Node, options?: CircleOptions);

        setText(text: string);
        animate(percentage: number);
    }

    interface CircleOptions {
        color?: string;
        trailColor?: string;
        trailWidth?: number;
        strokeWidth: number;
        fill?: string;
    }
}

declare module "progressbar.js" {
    export = progressbar;
}
