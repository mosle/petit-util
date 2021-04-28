export default class DomUtil {
  computedProp(element: HTMLElement, prop: string) {
    let r = 0;
    if (element)
      r = parseFloat(
        getComputedStyle(element, null)[prop as any].replace("px", "")
      );
    return r;
  }
  computedHeight(element: HTMLElement): number {
    return this.computedProp(element, "height");
  }
  computedWidth(element: HTMLElement): number {
    return this.computedProp(element, "width");
  }
}
