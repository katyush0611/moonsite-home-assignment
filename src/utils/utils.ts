import { ApplicationState } from "../store/store";

export const randomIdGenerator = (prefix: number): number => {
  const start = prefix.toString();
  const randomPart = Math.floor(Math.random() * 9999).toString();
  return parseInt(start + randomPart);
};

export const saveStateToLocalStorage = (state: ApplicationState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Failed to save state", err);
  }
};

export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Failed to load state", err);
    return undefined;
  }
};
