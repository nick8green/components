import { hexToRgb, rgbToHex } from "utils/colours";

interface ConversionTest {
  hex: string;
  rgb: [number, number, number];
}

describe("colour utility tests", () => {
  const conversionTests: ConversionTest[] = [
    {
      hex: "#000000",
      rgb: [0, 0, 0],
    },
    {
      hex: "#ffffff",
      rgb: [255, 255, 255],
    },
    {
      hex: "#708090",
      rgb: [112, 128, 144],
    },
    {
      hex: "#aaaaaa",
      rgb: [170, 170, 170],
    },
    {
      hex: "#242424",
      rgb: [36, 36, 36],
    },
    {
      hex: "#CCCCCC",
      rgb: [204, 204, 204],
    },
  ];

  describe("HEX values to RGB", () => {
    conversionTests.forEach((tc: ConversionTest) => {
      it(`${tc.hex} to RGB`, () => {
        expect(hexToRgb(tc.hex)).toEqual(tc.rgb);
      });
    });

    it("errors if the hex value is too short", () => {
      expect(() => hexToRgb("#123")).toThrow(
        "please specify a valid hex colour value (^#[0-9a-f]{6})!",
      );
    });

    it("errors if the hex value is invalid", () => {
      expect(() => hexToRgb("123456")).toThrow(
        "please specify a valid hex colour value (^#[0-9a-f]{6})!",
      );
    });
  });

  describe("RGB values to HEX", () => {
    conversionTests.forEach((tc: ConversionTest) => {
      it(`${tc.rgb} to HEX`, () => {
        expect(rgbToHex(...tc.rgb)).toEqual(tc.hex.toLowerCase());
      });
    });

    describe("errors if the red value is", () => {
      it("is below 0", () => {
        expect(() => rgbToHex(-1, 10, 20)).toThrow(
          "please specify a valid colour value (0-255)!",
        );
      });

      it("is above 255", () => {
        expect(() => rgbToHex(300, 10, 20)).toThrow(
          "please specify a valid colour value (0-255)!",
        );
      });
    });

    describe("errors if the green value is", () => {
      it("is below 0", () => {
        expect(() => rgbToHex(10, -20, 30)).toThrow(
          "please specify a valid colour value (0-255)!",
        );
      });

      it("is above 255", () => {
        expect(() => rgbToHex(10, 2000, 30)).toThrow(
          "please specify a valid colour value (0-255)!",
        );
      });
    });

    describe("errors if the blue value is", () => {
      it("is below 0", () => {
        expect(() => rgbToHex(10, 20, -30)).toThrow(
          "please specify a valid colour value (0-255)!",
        );
      });

      it("is above 255", () => {
        expect(() => rgbToHex(10, 20, 300)).toThrow(
          "please specify a valid colour value (0-255)!",
        );
      });
    });
  });
});
