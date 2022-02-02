import getFileExtension from "./getFileExtension";

describe("getFileExtension | function | unit test", () => {
  describe("when a file contains some extension", () => {
    it("returns its extension", () => {
      expect(getFileExtension("myNakedSelfie.jpeg")).toBe("jpeg");
      expect(getFileExtension("my_naked_selfie.jpeg")).toBe("jpeg");
      expect(getFileExtension("my-naked-selfie.jpeg")).toBe("jpeg");
      expect(getFileExtension("my.naked.selfie.jpeg")).toBe("jpeg");
      expect(getFileExtension("a.pdf")).toBe("pdf");
      expect(getFileExtension(".csv")).toBe("csv");
    });
  });

  describe("when a file doesn't have an extension", () => {
    it("returns nothing", () => {
      expect(getFileExtension("myNakedSelfie")).toBe(null);
    });
  });
});
