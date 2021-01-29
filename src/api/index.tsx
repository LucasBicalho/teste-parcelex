import Template from "../Template";
import AppComponent from "./AppStyles";
export const getAppHTML = async () => {
  const stylesArray = await AppComponent.getStyles();
  const styles = stylesArray
    .reduce((totalStyles, style) => (totalStyles += "\n" + style), "")
    .trim();

  const html = Template.getHTML("", styles, "");
  return html;
};
