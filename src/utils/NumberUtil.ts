export default class NumberUtil {
  random(min: number, max: number | null = null): number {
    if (max == null) {
      max = min;
      min = 0;
    }
    return Math.random() * (max - min) + min;
  }
  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  zero(): number {
    return 0;
  }
}
