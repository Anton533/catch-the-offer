import { ele } from "../helpers.js";

import { Settings } from "./settings.component.js";
import { Scores } from "./scores.component.js";
import { Grid } from "./grid.component.js";

export function Game() {
  const containerEle = ele("div", "game-wrapper");

  const settingsEle = Settings();
  containerEle.append(settingsEle);

  const scoresEle = Scores();
  containerEle.append(scoresEle);

  const gridEle = Grid();
  containerEle.append(gridEle);

  return containerEle;
}
