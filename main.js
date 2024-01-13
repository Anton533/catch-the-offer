import { Game } from "./ui/game.component.js";

const app = document.getElementById("app");
app.classList.add("main");

function renderApp() {
  app.innerHTML = "";

  const gameEle = Game();
  app.append(gameEle);
}

renderApp();
