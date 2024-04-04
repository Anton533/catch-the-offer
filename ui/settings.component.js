import { ele } from "../helpers.js";

import {
  GRID_SIZE,
  POINTS_TO_WIN,
  DECREASE_DELTA_IN_MS,
  MAX_MISSES,
} from "../data/game.data.js";

export function Settings() {
  const containerEle = ele("div", "settings");

  const gridSizeEle = ele("div", "grid-size");
  const gridSizeLabel = ele("label", "grid-size__label");
  const gridSizeSelect = ele("select", "grid-size__select");
  gridSizeLabel.append("Grid size");

  GRID_SIZE.forEach((e) => {
    const gridSizeOption = ele("option", "grid-size__option");
    gridSizeOption.value = `${e}`;
    gridSizeOption.innerText = `${e}x${e}`;
    gridSizeSelect.append(gridSizeOption);
  });

  gridSizeEle.append(gridSizeLabel, gridSizeSelect);

  const points = ele("div", "points");
  const pointsLabel = ele("label", "points__label");
  const pointsSelect = ele("select", "points__select");
  pointsLabel.append("Points to win");

  POINTS_TO_WIN.forEach((e) => {
    const pointsOption = ele("option", "points__option");
    pointsOption.value = `${e}`;
    pointsOption.innerText = `${e} pts`;
    pointsSelect.append(pointsOption);
  });
  points.append(pointsLabel, pointsSelect);

  const msEle = ele("div", "milliseconds");
  const msLabel = ele("label", "milliseconds__label");
  const msSelect = ele("select", "milliseconds__select");
  msLabel.append("ms after the catch");

  DECREASE_DELTA_IN_MS.forEach((e) => {
    const msOption = ele("option", "milliseconds__option");
    msOption.value = `${e}`;
    msOption.innerText = `${e} ms`;
    msSelect.append(msOption);
  });
  msEle.append(msLabel, msSelect);

  const maxMissesEle = ele("div", "max-misses");
  const maxMissesLabel = ele("label", "max-misses__label");
  const maxMissesSelect = ele("select", "max-misses__select");
  maxMissesLabel.append("Maximum misses");

  MAX_MISSES.forEach((e) => {
    const maxMissesOption = ele("option", "max-misses__option");
    maxMissesOption.value = `${e}`;
    maxMissesOption.innerText = `${e}`;
    maxMissesSelect.append(maxMissesOption);
  });
  maxMissesEle.append(maxMissesLabel, maxMissesSelect);

  const muteEle = ele("div", "mute");
  const muteTitle = ele("p", "mute__title");
  const muteSwitch = ele("div", "mute__switch");
  muteTitle.append("Mute mode");
  muteSwitch.innerHTML = `
  <label class="switch">
    <input type="checkbox">
    <span class="slider round">
    </span>
  </label>
`;

  muteEle.append(muteTitle, muteSwitch);

  containerEle.append(gridSizeEle, points, msEle, maxMissesEle, muteEle);

  return containerEle;
}
