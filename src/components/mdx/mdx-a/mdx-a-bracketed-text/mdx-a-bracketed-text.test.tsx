import { getABracketedTextSubformatProps } from "./mdx-a-bracketed-text";

describe("mdx-a-bracketed-text", () => {
  describe("getABracketedTextSubformatProps", () => {
    it("should return props without modification when children is not a string", () => {
      const props = { children: <div>Not a string</div> };

      const result = getABracketedTextSubformatProps(props);

      expect(result).toBe(props); // Should return the same props object
    });

    it("should return props without modification when children does not contain text wrapped in rounded brackets", () => {
      const props = { children: "This is a test without brackets." };

      const result = getABracketedTextSubformatProps(props);

      expect(result).toEqual(props); // Should return props without modification
    });

    it("should remove bracketed text from children and add it to bracketedItems prop when children contains text wrapped in brackets", () => {
      const props = {
        children: "This is a test (with brackets) and more (content).",
      };

      const result = getABracketedTextSubformatProps(props);

      expect(result).toEqual({
        ...props,
        children: "This is a test and more .", // Bracketed text removed
        bracketedItems: ["with brackets", "content"], // Bracketed text moved here
      });
    });
  });
});
