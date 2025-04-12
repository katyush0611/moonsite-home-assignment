export const randomIdGenerator = (prefix: number): number => {
  const start = prefix.toString();
  const randomPart = Math.floor(Math.random() * 9999).toString();
  return parseInt(start + randomPart);
};
