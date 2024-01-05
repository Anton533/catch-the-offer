import { Game } from "./ui/game.component.js";

function renderApp() {
  document.body.innerHTML = "";

  const gameEle = Game();
  document.body.append(gameEle);
}

renderApp();
