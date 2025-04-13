export const getHexFromColorName = (colorName: string): string | null => {
  const ctx = document.createElement("canvas").getContext("2d");
  if (!ctx) return null;

  ctx.fillStyle = colorName;
  const computed = ctx.fillStyle;

  // Check if it's a valid color
  if (
    !computed ||
    (computed === "#000000" && colorName.toLowerCase() !== "black")
  ) {
    return null;
  }

  // Convert to hex if returned in rgb() format
  if (computed.startsWith("rgb")) {
    const rgb = computed.match(/\d+/g);
    if (!rgb) return null;
    return (
      "#" +
      rgb
        .map((x) => {
          const hex = parseInt(x).toString(16);
          return hex.length === 1 ? "0" + hex : hex;
        })
        .join("")
    );
  }

  return computed; // Already in hex format
};

export const hexToRgb = (hex: string): [number, number, number] => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

export const colorDistance = (
  c1: [number, number, number],
  c2: [number, number, number]
): number => {
  return Math.sqrt(
    Math.pow(c1[0] - c2[0], 2) +
      Math.pow(c1[1] - c2[1], 2) +
      Math.pow(c1[2] - c2[2], 2)
  );
};
