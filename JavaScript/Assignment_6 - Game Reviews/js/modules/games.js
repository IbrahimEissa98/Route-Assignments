import Loader from "./loader.js";
import DisplayUi from "./ui.js";
import Details from "./details.js";

export default class Games {
  constructor() {
    this.loader = new Loader();
    this.display = new DisplayUi();
  }

  startGame() {
    this.getApiGames("mmorpg");
    this.setNavLinksEvent();
  }

  async getApiGames(category) {
    this.loader.showLoader();
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "aec37d32dcmshbd1fba3ccdf1fcap132d6ejsn84fb20f4e3e0",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result);
      this.display.displayGames(result);
      this.loader.hideLoader();
      this.setCardsEvent();
    } catch (error) {
      console.error(error);
    }
  }

  setCardsEvent() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        this.getCardDetails(card.getAttribute("card-id"));
      });
    });
  }

  setNavLinksEvent() {
    const links = document.querySelectorAll(".nav-item");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".nav-link.active").classList.remove("active");
        e.target.classList.add("active");
        this.getApiGames(e.target.id);
      });
    });
  }

  getCardDetails(id) {
    new Details(id);
  }
}
