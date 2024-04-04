import { OFFER_STATUSES, data, subscribe } from "../data/game.data.js";

export function Player() {
  const catchAudio = new Audio();
  const missAudio = new Audio();

  catchAudio.src = "assets/sounds/catch.wav";
  missAudio.src = "assets/sounds/miss.mp3";

  subscribe(() => {
    if (data.offerStatus === OFFER_STATUSES.caught) {
      catchAudio.currentTime = 0;
      catchAudio.play();
    }
  });

  subscribe(() => {
    if (data.offerStatus === OFFER_STATUSES.miss) {
      missAudio.currentTime = 0;
      missAudio.play();
    }
  });
}
