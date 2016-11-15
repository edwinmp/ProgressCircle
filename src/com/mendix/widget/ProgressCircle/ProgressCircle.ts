import * as dojoDeclare from "dojo/_base/declare";
import * as WidgetBase from "mxui/widget/_WidgetBase";

import { Circle } from "progressbar.js";

// import { Progress } from "./components/Progress";
// import { createElement } from "react";
// import { render, unmountComponentAtNode } from "react-dom";

class ProgressCircle extends WidgetBase {
    // Properties from Mendix modeler
    progressAttribute: string;

    private contextObject: mendix.lib.MxObject;

    update(contextObject: mendix.lib.MxObject, callback: Function) {
        this.contextObject = contextObject;
        this.updateRendering(this.contextObject.get(this.progressAttribute) as number);

        callback();
    }

    updateRendering(percentage: number) {
        // if (this.contextObject) {
        //     render(createElement(Progress, { percentage }), this.domNode);
        // }

        let circle = new Circle(this.domNode, { strokeWidth: 5 });
        circle.setText("85%");
    }

    // uninitialize() {
    //     unmountComponentAtNode(this.domNode);
    //
    //     return true;
    // }
}

// Declare widget prototype the Dojo way
// Thanks to https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/dojo/README.md
// tslint:disable : only-arrow-functions
dojoDeclare("com.mendix.widget.ProgressCircle.ProgressCircle", [ WidgetBase ], function (Source: any) {
    let result: any = {};
    for (let property in Source.prototype) {
        if (property !== "constructor" && Source.prototype.hasOwnProperty(property)) {
            result[property] = Source.prototype[property];
        }
    }
    return result;
} (ProgressCircle));
