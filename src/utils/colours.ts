export const hexToRgb = (hex: string): [number, number, number] => {
  const result = validateHex(hex);

  const red = parseInt(hexColour(result[1]), 16),
    green = parseInt(hexColour(result[2]), 16),
    blue = parseInt(hexColour(result[3]), 16);

  return [red, green, blue];
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

const validateHex = (value: string): RegExpExecArray => {
  const error = new Error(
    "please specify a valid hex colour value (^#?[0-9a-f]{3|6})!",
  );

  const rawHex = value.startsWith("#") ? value.slice(1) : value;
  if (rawHex.length !== 3 && rawHex.length !== 6) {
    throw error;
  }

  const result = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(
    value.toLowerCase(),
  );
  if (!result) {
    throw error;
  }

  return result;
};

const hexColour = (value: string): string => {
  if (value.length === 1) {
    return `${value}${value}`;
  }
  return value;
};
