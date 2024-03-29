import { data } from "../data/game.data.js";
import { Cell } from "./cell.component.js";

import { ele } from "../helpers.js";

export function Grid() {
  const containerEle = ele("table", "grid");

  for (let y = 0; y < data.settings.rowsCount; y++) {
    const row = document.createElement("tr");

    for (let x = 0; x < data.settings.columnsCount; x++) {
      const cell = Cell(x, y);
      row.append(cell);
    }
    containerEle.append(row);
  }

  return containerEle;
}
