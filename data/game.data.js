export const GRID_SIZE = [3, 4, 5, 6, 7, 8];
export const POINTS_TO_WIN = [10, 20, 30, 40, 60, 80, 100];
export const DECREASE_DELTA_IN_MS = [200, 180, 150, 130, 110, 100, 70];
export const MAX_MISSES = [3, 5, 7, 9, 11, 13];
export const SWITCHING_SOUNDS = { on: true, off: false };

export const OFFER_STATUSES = {
  default: "default",
  caught: "caught",
  miss: "miss",
};

export const data = {
  settings: {
    rowsCount: GRID_SIZE[0],
    columnsCount: GRID_SIZE[0],
    pointsToWin: 10,
    maximumMisses: 3,
    decreaseDeltaInMs: 100,
    isMuted: SWITCHING_SOUNDS.on,
  },
  offerStatus: OFFER_STATUSES.default,
  coords: {
    current: {
      x: 0,
      y: 0,
    },
    previous: {
      x: 0,
      y: 0,
    },
  },
  score: {
    missCount: 0,
    caughtCount: 0,
  },
};

let subscribers = [];

function notify() {
  subscribers.forEach((subscriber) => subscriber());
}

export function subscribe(newSubscriber) {
  subscribers.push(newSubscriber);
}

let stepIntervalId;

function runStepInterval() {
  stepIntervalId = setInterval(() => {
    missOffer();
    moveOfferToRandomPosition();
    notify();
  }, 2000);
}
// runStepInterval();

function moveOfferToRandomPosition() {
  let newX = null;
  let newY = null;

  do {
    newX = getRandom(data.settings.columnsCount - 1);
    newY = getRandom(data.settings.rowsCount - 1);
  } while (data.coords.current.x === newX && data.coords.current.y === newY);

  data.coords.current.x = newX;
  data.coords.current.y = newY;
}

function missOffer() {
  data.offerStatus = OFFER_STATUSES.miss;
  data.score.missCount++;
  data.coords.previous = { ...data.coords.current };

  setTimeout(() => {
    data.offerStatus = OFFER_STATUSES.default;
    notify();
  }, 200);
}

export function catchOffer() {
  data.offerStatus = OFFER_STATUSES.caught;
  data.score.caughtCount++;
  data.coords.previous = { ...data.coords.current };

  setTimeout(() => {
    data.offerStatus = OFFER_STATUSES.default;
    notify();
  }, 200);

  moveOfferToRandomPosition();
  notify();
  clearInterval(stepIntervalId);
  runStepInterval();
}

function getRandom(n) {
  return Math.floor(Math.random() * n);
}
// конечные автоматы
