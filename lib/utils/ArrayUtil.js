"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayUtil {
    shuffleArray(array) {
        for (let i = array.length; 1 < i; i--) {
            const k = Math.floor(Math.random() * i);
            [array[k], array[i - 1]] = [array[i - 1], array[k]];
        }
        return array;
    }
    isMatchAllInArray(a, b) {
        let pass = true;
        a.forEach((o) => {
            if (!b.includes(o)) {
                return false;
            }
        });
        b.forEach((o) => {
            if (!a.includes(o)) {
                return false;
            }
        });
        return pass;
    }
}
exports.default = ArrayUtil;
