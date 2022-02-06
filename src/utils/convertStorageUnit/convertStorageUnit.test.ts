import convertStorageUnit from "./convertStorageUnit";

describe("convertStorageUnit | function | unit test", () => {
  describe("when a valid target-unit is given", () => {
    it("should turn the given value into gigabytes", () => {
      expect(convertStorageUnit({ to: "GB", value: 102400 })).toBe("100 GB");
      expect(convertStorageUnit({ to: "GB", value: 1024 })).toBe("1 GB");
      expect(convertStorageUnit({ to: "GB", value: 512 })).toBe("1 GB");
    });
  });

  describe("when some mismatched target-unit is given", () => {
    it("should throw an error", () => {
      expect(() =>
        // @ts-expect-error
        convertStorageUnit({ to: "PB", value: 102400 })
      ).toThrowError("Invalid 'to' argument.");
    });
  });
});
