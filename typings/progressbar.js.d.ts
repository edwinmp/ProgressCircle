// tslint:disable-next-line
declare namespace progressbar {

    export class Circle {
        path: SVGPathElement;
        trail: SVGPathElement;

        constructor(node: React.ReactNode, options?: CircleOptions);

        setText(text: string);
        animate(percentage: number);
        destroy();
    }

    interface CircleOptions {
        color?: string;
        trailColor?: string;
        trailWidth?: number;
        strokeWidth: number; // For IE support, shouldn't be over 6
        fill?: string;
    }
}

declare module "progressbar.js" {
    export = progressbar;
}
