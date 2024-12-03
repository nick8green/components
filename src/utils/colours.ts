export const hexToRgb = (hex: string): [number, number, number] | null => {
  if (!/^#[0-9a-f]{6}$/.exec(hex.toLowerCase())) {
    throw new Error("please specify a valid hex colour value (^#[0-9a-f]{6})!");
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

export const rgbToHex = (red: number, green: number, blue: number): string => {
  if (
    red < 0 ||
    red > 255 ||
    green < 0 ||
    green > 255 ||
    blue < 0 ||
    blue > 255
  ) {
    throw new Error("please specify a valid colour value (0-255)!");
  }
  return "#" + valueToHex(red) + valueToHex(green) + valueToHex(blue);
};

const valueToHex = (value: number): string => {
  const hex = value.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};
