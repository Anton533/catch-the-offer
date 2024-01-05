export const OFFER_STATUSES = {
  default: "default",
  miss: "miss",
  caught: "caught",
};

export const data = {
  // array for cells: cell = {x,y}
  settings: {
    rowsCount: 5,
    columnsCount: 5,
    pointsToWin: 10,
    maximumMisses: 3,
    decreaseDeltaInMs: 100,
    isMuted: true,
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
    missCount: 3,
    caughtCount: 2,
  },
};

// конечные автоматы
