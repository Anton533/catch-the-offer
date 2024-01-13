import { ele } from "../helpers.js";

export function Settings() {
  const containerEle = ele("div", "settings");

  const gridSizeEle = ele("div", "grid-size");
  const gridSizeLabel = ele("label", "grid-size__label");
  const gridSizeSelect = ele("select", "grid-size__select");
  const gridSizeOption = ele("option", "grid-size__option");
  const gridSizeOption1 = ele("option", "grid-size__option");
  gridSizeLabel.append("Grid size");
  gridSizeOption.value = "3x3";
  gridSizeOption.innerText = "3x3";

  gridSizeSelect.append(gridSizeOption);
  gridSizeEle.append(gridSizeLabel, gridSizeSelect);

  const points = ele("div", "points");
  const pointsLabel = ele("label", "points__label");
  const pointsSelect = ele("select", "points__select");
  pointsLabel.append("Points to win");
  points.append(pointsLabel, pointsSelect);

  const msEle = ele("div", "milliseconds");
  const msLabel = ele("label", "milliseconds__label");
  const msSelect = ele("select", "milliseconds__select");
  msLabel.append("ms after the catch");
  msEle.append(msLabel, msSelect);

  const maxMissesEle = ele("div", "max-misses");
  const maxMissesLabel = ele("label", "max-misses__label");
  const maxMissesSelect = ele("select", "max-misses__select");
  maxMissesLabel.append("Maximum misses");
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
