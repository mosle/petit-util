"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ArrayUtil_1 = __importDefault(require("./utils/ArrayUtil"));
const NumberUtil_1 = __importDefault(require("./utils/NumberUtil"));
const DomUtil_1 = __importDefault(require("./utils/DomUtil"));
const a = new ArrayUtil_1.default();
const n = new NumberUtil_1.default();
const d = new DomUtil_1.default();
class Utils {
    static get array() {
        return a;
    }
    static get number() {
        return n;
    }
    static get dom() {
        return d;
    }
}
exports.default = Utils;
