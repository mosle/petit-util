"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NumberUtil {
    random(min, max = null) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return Math.random() * (max - min) + min;
    }
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    zero() {
        return 0;
    }
}
exports.default = NumberUtil;
