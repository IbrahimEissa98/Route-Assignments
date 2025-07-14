import Loader from "./loader.js";
import DisplayUi from "./ui.js";

export default class Details {
  constructor(id) {
    this.loader = new Loader();
    this.display = new DisplayUi();
    this.getApiGameDetails(id);
    this.closeDetails();
  }

  async getApiGameDetails(id) {
    this.loader.showLoader();
    // document.getElementById("loader").classList.remove("d-none");
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
      this.display.displayGameDetails(result);
      this.openDetails();
      this.loader.hideLoader();
    } catch (error) {
      console.error(error);
    }
  }

  closeDetails() {
    document
      .querySelector(".game-details .close-icon")
      .addEventListener("click", () => {
        document.querySelector(".game-details").classList.add("d-none");
      });
    window.addEventListener("keyup", (e) => {
      if (e.key == "Escape") {
        document.querySelector(".game-details").classList.add("d-none");
      }
    });
  }

  openDetails() {
    document.querySelector(".game-details").classList.remove("d-none");
  }
}
