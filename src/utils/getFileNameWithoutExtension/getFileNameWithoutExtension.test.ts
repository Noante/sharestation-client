import getFileNameWithoutExtension from './getFileNameWithoutExtension';

describe('getFileNameWithoutExtension | function | unit test', () => {
  describe("when the file name constains some extension", () => {
    it("should return the file name without its extension", () => {
      expect(getFileNameWithoutExtension('myNakedSelfie.jpeg')).toBe('myNakedSelfie')
      expect(getFileNameWithoutExtension('my_naked_selfie.jpeg')).toBe('my_naked_selfie')
      expect(getFileNameWithoutExtension('my-naked-selfie.png')).toBe('my-naked-selfie')
      expect(getFileNameWithoutExtension('my.naked.selfie.pdf')).toBe('my.naked.selfie')
    })
  })

  describe("when the file name doesn't contain an extension", () => {
    it("should return the file name", () => {
      expect(getFileNameWithoutExtension('myNakedSelfie')).toBe('myNakedSelfie')
      expect(getFileNameWithoutExtension('my_naked_selfie')).toBe('my_naked_selfie')
      expect(getFileNameWithoutExtension('my-naked-selfie')).toBe('my-naked-selfie')
      expect(getFileNameWithoutExtension('my.naked.selfie')).toBe('my.naked')
    })
  })
});