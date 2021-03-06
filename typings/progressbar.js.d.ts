// tslint:disable-next-line
declare namespace progressbar {

    export class Circle {
        path: SVGPathElement;
        trail: SVGPathElement;
        static _opts: CircleOptions;

        constructor(node: React.ReactNode, options?: CircleOptions);

        setText(text: string);
        animate(circleFraction: number);
        destroy();
    }

    interface CircleOptions {
        color?: string;
        trailColor?: string;
        trailWidth?: number;
        strokeWidth: number; // For IE & Edge support, shouldn't be over 6
        fill?: string;
        duration?: number;
    }
}

declare module "progressbar.js" {
    export = progressbar;
}
