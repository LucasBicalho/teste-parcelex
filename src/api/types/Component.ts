import { getStyleArray } from "../utils/getStyles";

class Component {
  children: Array<Component>;
  styles: Array<string>;
  stylesFile: string;
  alreadyGotStyles: boolean;

  constructor(children: Array<Component> = [], stylesFile = "") {
    this.children = children;
    this.stylesFile = stylesFile;
    this.styles = [];
    this.alreadyGotStyles = false;
  }

  async getStyles() {
    if (!this.alreadyGotStyles) {
      this.styles = await this.__getStyles();
    }
    return this.styles;
  }

  private async __getStyles() {
    this.alreadyGotStyles = true;
    const localStyles = await getStyleArray(this.stylesFile);
    const promisesArray = this.children.map((child) => child.getStyles());
    const chidrenStylesArrays = await Promise.all(promisesArray);
    const chidrenStyles = chidrenStylesArrays.reduce(
      (styles, child) => styles.concat(child),
      new Array<string>()
    );
    return localStyles.concat(chidrenStyles);
  }
}

export default Component;
