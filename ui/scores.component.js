import { data } from "../data/game.data.js";

export function Scores() {
  const containerElement = document.createElement("div");
  update(containerElement);

  return containerElement;
}

function update(containerElement) {
  containerElement.append(
    "catch: " + data.score.caughtCount + "; miss: " + data.score.missCount
  );
}
