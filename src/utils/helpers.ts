export function shortString(text: string) {
  const splittedText = text.split("");
  const slicedText = splittedText.slice(8).join("");
  const replacedText = text.replace(slicedText, "...");
  return replacedText;
}
