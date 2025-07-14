export default class Loader {
  constructor() {
    this.loader = document.getElementById("loader");
  }

  showLoader() {
    this.loader.classList.remove("loader-opacity");
    this.loader.classList.remove("d-none");
  }
  hideLoader() {
    // setTimeout(this.loader.classList.add("loader-opacity"), 1000);
    setTimeout(this.removeLoader, 1000);
  }
  removeLoader() {
    this.loader.classList.add("d-none");
  }
}
