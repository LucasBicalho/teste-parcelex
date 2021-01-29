import path from "path";
import { promises } from "fs";

export const getStyleString = async (filePath: string) => {
  if (!filePath) return "";

  const file = path.resolve(filePath);
  try {
    const style = await promises.readFile(file, "utf8");
    return style;
  } catch (error) {
    console.log("erro ao ler arquivo");
    throw error;
  }
};

export const getStyleStringMinified = async (filePath: string) => {
  const css = await getStyleString(filePath);
  const semicolon = css.split(/;\s*/).join(";");
  const openBracket = semicolon.split(/\{\s*/).join("{");
  const closeBracket = openBracket.split(/\}\s*/).join("}\n");
  const style = closeBracket.trim();
  return style;
};

export const getStyleArray = async (filePath: string) => {
  const css = await getStyleStringMinified(filePath);
  const style = css.split(/\r?\n/);
  return style;
};
