import { OFFER_STATUSES, data, catchOffer } from "../data/game.data.js";
import { ele } from "../helpers.js";

export function Cell(x, y) {
  const cellEle = ele("td", "grid__cell");

  if (x === data.coords.current.x && y === data.coords.current.y) {
    const offerEle = document.createElement("img");
    offerEle.src = "./assets/images/offer.png";

    offerEle.addEventListener("click", catchOffer);

    cellEle.append(offerEle);
  }

  if (
    data.offerStatus === OFFER_STATUSES.caught &&
    x === data.coords.previous.x &&
    y === data.coords.previous.y
  ) {
    const offerEle = document.createElement("img");
    offerEle.src = "assets/images/caught-offer.png";
    cellEle.append(offerEle);
  }

  if (
    data.offerStatus === OFFER_STATUSES.miss &&
    x === data.coords.previous.x &&
    y === data.coords.previous.y
  ) {
    const offerEle = document.createElement("img");
    offerEle.src = "assets/images/missed-offer.png";
    cellEle.append(offerEle);
  }

  return cellEle;
}
