export const isValidURL = (url: string) => {
  try {
    const parsed = new URL(url);

    return ["http:", "https:"].includes(parsed.protocol);
  } catch (e) {
    return false;
  }
};
