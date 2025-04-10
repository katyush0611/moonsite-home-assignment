export const action = <T = any>(type: string, payload?: T) => ({
  type,
  payload,
});
