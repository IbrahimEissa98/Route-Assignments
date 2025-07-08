// Time
function getDay(dayNum) {
  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[dayNum];
}
function getMonth(monthNum) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return months[monthNum];
}
var day = document.querySelector(".day-hour-date .day");
var clock = document.querySelector(".day-hour-date .hour");
var date = document.querySelector(".day-hour-date .date");
setInterval(function () {
  var time = new Date();
  clock.innerText = time.toLocaleTimeString();
  day.innerText = getDay(time.getDay());
  date.innerText = `${time.getDate()} ${getMonth(time.getMonth())}`;
}, 1000);

// ==========================================================

// for (var i = 0; i < navIcons.length; i++) {
//   navIcons[i].addEventListener("mouseenter", function (e) {
//     var iconIndex = navIcons.indexOf(e.target);

//     // navPs[iconIndex].classList.add("float-label");
//     navPs[iconIndex].classList.remove("d-none");
//     // navIcons[iconIndex].classList.add("float-label");
//   });
//   navIcons[i].addEventListener("mouseleave", function (e) {
//     var iconIndex = navIcons.indexOf(e.target);

//     // navPs[iconIndex].classList.remove("float-label");
//     navPs[iconIndex].classList.add("d-none");
//     // navIcons[iconIndex].classList.remove("float-label");
//   });
// }

// var openMenu = document.querySelector(".open-menu i");
// if (openMenu.classList.contains("fa-angles-right")) {
//   openMenu.addEventListener("click", function (e) {
//     navContainer.classList.remove("nav-container");
//     openMenu.classList.replace("fa-angles-right", "fa-angles-left");
//     for (var i = 0; i < navPs.length; i++) {
//       navIcons[i].classList.remove("float-label");
//       navPs[i].classList.remove("d-none");
//     }
//   });
// }

// ================================================================
// navigator.geolocation.watchPosition(
//   function (position) {
//     var lat = position.coords.latitude;
//     console.log(position);
//   },
//   function (error) {
//     console.error(error);
//   }
// );
// const x = document.getElementById("demo");
// async function getLocation() {
//   if (navigator.geolocation) {
//     await navigator.geolocation.watchPosition(success, error);
//   } else {
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }

// function success(position) {
//   x.innerHTML =
//     "Latitude: " +
//     position.coords.latitude +
//     "<br>Longitude: " +
//     position.coords.longitude;
// }

// function error(error) {
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       x.innerHTML = "User denied the request for Geolocation.";
//       break;
//     case error.POSITION_UNAVAILABLE:
//       x.innerHTML = "Location information is unavailable.";
//       break;
//     case error.TIMEOUT:
//       x.innerHTML = "The request to get user location timed out.";
//       break;
//     case error.UNKNOWN_ERROR:
//       x.innerHTML = "An unknown error occurred.";
//       break;
//   }
// }
// ================================================================
