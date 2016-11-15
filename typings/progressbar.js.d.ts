// tslint:disable-next-line
declare namespace progressbar {

    export class Circle {
        constructor(node: Node, options?: CircleOptions);

        setText(text: string);
    }

    interface CircleOptions {
        color?: string;
        trailColor?: string;
        trailWidth?: string;
        strokeWidth: number;
        fill?: string;
    }
}

declare module "progressbar.js" {
    export = progressbar;
}
