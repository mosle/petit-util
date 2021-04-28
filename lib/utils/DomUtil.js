"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DomUtil {
    computedProp(element, prop) {
        let r = 0;
        if (element)
            r = parseFloat(getComputedStyle(element, null)[prop].replace("px", ""));
        return r;
    }
    computedHeight(element) {
        return this.computedProp(element, "height");
    }
    computedWidth(element) {
        return this.computedProp(element, "width");
    }
}
exports.default = DomUtil;
