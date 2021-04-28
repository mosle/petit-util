import ArrayUtil from "./utils/ArrayUtil";
import NumberUtil from "./utils/NumberUtil";
import DomUtil from "./utils/DomUtil";
const a = new ArrayUtil();
const n = new NumberUtil();
const d = new DomUtil();
export default class Utils {
  static get array(): ArrayUtil {
    return a;
  }
  static get number(): NumberUtil {
    return n;
  }
  static get dom(): DomUtil {
    return d;
  }
}
