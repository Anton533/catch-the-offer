import { data } from "../data/game.data.js";
import { ele } from "../helpers.js";

export function Scores() {
  const containerElement = ele("div", "score");

  update(containerElement);

  return containerElement;
}

function update(containerElement) {
  const catchEle = ele("div", "score__catch");
  const catchTextEle = ele("span", "score__catch-text");
  const catchQuantityEle = ele("span", "score__catch-quantity");

  catchTextEle.textContent = "Catch: ";
  catchQuantityEle.textContent = data.score.caughtCount;

  catchEle.append(catchTextEle, catchQuantityEle);

  const missEle = ele("div", "score__miss");
  const missTextEle = ele("span", "score__miss-text");
  const missQuantityEle = ele("span", "score__miss-quantity");

  missTextEle.textContent = "Miss: ";
  missQuantityEle.textContent = data.score.missCount;

  missEle.append(missTextEle, missQuantityEle);

  containerElement.append(catchEle, missEle);
}
