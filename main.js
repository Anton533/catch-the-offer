import { Game } from "./ui/game.component.js";
import { subscribe } from "./data/game.data.js";
import { Player } from "./sound/player.js";

Player();

const app = document.getElementById("app");
app.classList.add("main");

subscribe(renderApp);

function renderApp() {
  app.innerHTML = "";

  const gameEle = Game();
  app.append(gameEle);
}

renderApp();
