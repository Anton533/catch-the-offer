import { data } from "./game.data.js";

export function selectCurrentOfferCoords() {
  return data.coords.current;
}

export function selectPreviousOfferCoords() {
  return data.coords.previous;
}
