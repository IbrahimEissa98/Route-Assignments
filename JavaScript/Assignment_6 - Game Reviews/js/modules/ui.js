export default class DisplayUi {
  displayGames(games) {
    let carton = ``;
    // console.log(
    //   games[0].short_description.split(" ", 10).join().replaceAll(",", " ")
    // );

    for (let i = 0; i < games.length; i++) {
      carton += `<div class="col-md-6 col-lg-4 col-xl-3">
            <div class="card h-100 border border-secondary rounded-2 justify-content-between" card-id="${
              games[i].id
            }">
              <div class="top p-3">
                <img
                  src="${games[i].thumbnail}"
                  class="card-img-top"
                  alt="${games[i].title} image"
                />
                <div class="card-body p-0 mt-3 ali">
                  <div class="title d-flex justify-content-between align-items-center">
                    <h6 class="card-title text-white m-0">${games[i].title}</h6>
                    <span class="px-2 py-1 rounded-2 text-white">free</span>
                  </div>
                  <p class="card-text text-white-50 text-center mt-2" title="${
                    games[i].short_description
                  }">
                    ${games[i].short_description
                      .split(" ", 10)
                      .join()
                      .replaceAll(",", " ")}...
                  </p>
                </div>
              </div>
              <p
                class="card-bottom m-0 border-top d-flex justify-content-between p-2"
              >
                <span class="category px-2 py-1 rounded-2 text-white"
                  >${games[i].genre}</span
                >
                <span class="platform px-2 py-1 rounded-2 text-white"
                  >${games[i].platform}</span
                >
              </p>
            </div>
          </div>`;
    }
    document.querySelector(".games .main-row").innerHTML = carton;
  }

  displayGameDetails(data) {
    let carton = `<div class="col-lg-4">
            <div class="inner-details">
            <div id="carouselExampleAutoplaying" class="carousel slide rounded-2 overflow-hidden" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="${data.thumbnail}"
                      class="d-block w-100"
                      alt="${data.title} image"
                    />
                  </div>
                  ${data.screenshots
                    .map((shot) => {
                      return `<div class="carousel-item">
                    <img
                      src="${shot.image}"
                      class="d-block w-100"
                      alt="${data.title} image"
                    />
                  </div>`;
                    })
                    .toString()
                    .replaceAll(",", "")}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="inner-details">
              <h3 class="text-uppercase">
                <span class="text-capitalize text-info fs-4">Title:</span> ${
                  data.title
                }
              </h3>
              <div class="sub-info my-4">
              <div class="row g-3">
                  <div class="col-4 col-md-2">
                    <p class="text-white-50 m-0">Release Date:</p>
                  </div>
                  <div class="col-8 col-md-4">
                    <span class="text-white bg-primary rounded-2 px-2 py-1"
                      >${data.release_date}</span
                    >
                  </div>
                  <div class="col-4 col-md-2">
                    <p class="text-white-50 m-0">Category:</p>
                  </div>
                  <div class="col-8 col-md-4">
                    <span class="text-white bg-primary rounded-2 px-2 py-1"
                      >${data.genre}</span
                    >
                  </div>
                  <div class="col-4 col-md-2">
                    <p class="text-white-50 m-0">Platform:</p>
                  </div>
                  <div class="col-8 col-md-4">
                    <span class="text-white bg-primary rounded-2 px-2 py-1"
                      >${data.platform}</span
                    >
                  </div>
                  <div class="col-4 col-md-2">
                    <p class="text-white-50 m-0">Status:</p>
                  </div>
                  <div class="col-8 col-md-4">
                    <span class="text-white bg-primary rounded-2 px-2 py-1"
                      >${data.status}</span
                    >
                  </div>
                  <div class="col-4 col-md-2">
                    <p class="text-white-50 m-0">Developer:</p>
                  </div>
                  <div class="col-8 col-md-4">
                    <span class="text-white bg-primary rounded-2 px-2 py-1"
                      >${data.developer}</span
                    >
                  </div>
                  <div class="col-4 col-md-2">
                    <p class="text-white-50 m-0">Publisher:</p>
                  </div>
                  <div class="col-8 col-md-4">
                    <span class="text-white bg-primary rounded-2 px-2 py-1"
                      >${data.publisher}</span
                    >
                  </div>
                </div>
              </div>
              <p class="description">
                ${data.description}
              </p>
              <a
                class="btn btn-outline-danger mt-3"
                href="${data.game_url}"
                target="_blank"
                >Show Game</a
              >
            </div>
          </div>`;

    document.querySelector(".game-details .row").innerHTML = carton;
  }
}
