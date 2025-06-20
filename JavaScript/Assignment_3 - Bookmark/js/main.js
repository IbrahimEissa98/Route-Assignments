var websitesList = [];

var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");

var addWebBtn = document.getElementById("addWebBtn");
var searchBox = document.getElementById("searchInput");

var siteNameFeedback = document.getElementById("siteNameFeedback");
var siteUrlFeedback = document.getElementById("siteUrlFeedback");

var currentIndex = -1;
var isInUpdateMode = false;
var isInLightMode = false;

// Pattern to validate Inputs
var regExpPattern = {
  websiteName: /^[A-Za-z][a-zA-Z0-9 \-\.]{0,14}$/,
  websiteUrl:
    /^((http|https):\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}(:[0-9]{1,5})?(\/.*)?$/i,
};

// Check if there id data in the local storage
if (localStorage.getItem("websites") != null) {
  websitesList = JSON.parse(localStorage.getItem("websites"));
}
displayWebsites(websitesList);

// Submit button click
function addWebsite() {
  var website = {
    name: siteNameInput.value.trim(),
    url: siteUrlInput.value,
  };

  if (!checkInputsValidation(website.name, website.url)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You must fill all fields and enter valid data.",
    });
    validateInput(siteNameInput);
    validateInput(siteUrlInput);
    return;
  }

  if (!isInUpdateMode) {
    websitesList.push(website);
    Swal.fire({
      title: `${website.name} added to Bookmark successfully`,
      icon: "success",
      draggable: true,
    });
  } else {
    websitesList.splice(currentIndex, 1, website);
    isInUpdateMode = false;
    Swal.fire({
      title: `${website.name} Updated successfully`,
      icon: "success",
      draggable: true,
    });
  }

  addWebBtn.innerHTML = "Add Website";
  localStorage.setItem("websites", JSON.stringify(websitesList));
  displayWebsites(websitesList);
  clearAllInputFields();
}

// Check inputs validation
function checkInputsValidation(name, url) {
  return (
    regExpPattern.websiteName.test(name) && regExpPattern.websiteUrl.test(url)
  );
}

function validateInput(input) {
  if (input.id === "siteName") {
    siteNameFeedback.classList.remove("d-none");
    // siteNameFeedback.classList.add("d-block");
    validateInputValue(input);
    validateInputFeedback(input);
  } else {
    siteUrlFeedback.classList.remove("d-none");
    // siteUrlFeedback.classList.add("d-block");
    validateInputValue(input);
    validateInputFeedback(input);
  }
}

function validateInputValue(input) {
  if (input.id === "siteName") {
    if (regExpPattern.websiteName.test(input.value)) {
      siteNameInput.classList.add("is-valid");
      siteNameInput.classList.remove("is-invalid");
    } else {
      siteNameInput.classList.add("is-invalid");
      siteNameInput.classList.remove("is-valid");
    }
  } else {
    if (regExpPattern.websiteUrl.test(input.value)) {
      siteUrlInput.classList.add("is-valid");
      siteUrlInput.classList.remove("is-invalid");
    } else {
      siteUrlInput.classList.add("is-invalid");
      siteUrlInput.classList.remove("is-valid");
    }
  }
}

function validateInputFeedback(input) {
  if (input.id === "siteName") {
    if (regExpPattern.websiteName.test(input.value)) {
      siteNameFeedback.classList.add("valid-feedback");
      siteNameFeedback.classList.remove("invalid-feedback");
    } else {
      siteNameFeedback.classList.add("invalid-feedback");
      siteNameFeedback.classList.remove("valid-feedback");
    }
  } else {
    if (regExpPattern.websiteUrl.test(input.value)) {
      siteUrlFeedback.classList.add("valid-feedback");
      siteUrlFeedback.classList.remove("invalid-feedback");
    } else {
      siteUrlFeedback.classList.add("invalid-feedback");
      siteUrlFeedback.classList.remove("valid-feedback");
    }
  }
}

// Display websites list
function displayWebsites(arr) {
  var carton = ``;

  for (var i = 0; i < arr.length; i++) {
    carton += `<tr>
              <td class="py-3">${i + 1}</td>
              <td>${arr[i].name}</td>
              <td>
                <button class="btn btn-success" onclick="visitWebsite(${i})" title="${
      arr[i].url
    }">
                  <i class="fa-solid fa-eye"></i> Visit
                </button>
              </td>
              <td>
                <button class="btn btn-danger" onclick="deleteDialog(${i})">
                  <i class="fa-solid fa-trash"></i> Delete
                </button>
              </td>
              <td>
                <button
                  class="btn btn-secondary"
                  onclick="parseWebDataToInputs(${i});"
                >
                  <i class="fa-solid fa-edit"></i> Update
                </button>
              </td>
            </tr>`;
  }

  if (carton !== ``) {
    document.getElementById("tBody").innerHTML = carton;
  } else {
    document.getElementById("tBody").innerHTML = `<tr>
              <td colspan="5">
                <h2 class="text-danger text-center py-4">No Bookmarks Stored Yet</h2>
              </td>
            </tr>`;
  }
}

// Visit website
function visitWebsite(index) {
  window.open(websitesList[index].url, "_blank");
}

// Delete website
function deleteWebsite(index) {
  websitesList.splice(index, 1);
  localStorage.setItem("websites", JSON.stringify(websitesList));
  displayWebsites(websitesList);
}

function deleteDialog(index) {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger mx-2",
    },
    buttonsStyling: false,
  });
  swalWithBootstrapButtons
    .fire({
      title: "Are you sure?",
      text: `You want to delete ${websitesList[index].name}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: `${websitesList[index].name} has been deleted.`,
          icon: "success",
        });
        deleteWebsite(index);
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: `${websitesList[index].name} is safe :)`,
          icon: "error",
        });
      }
    });
}

// Parse web data to inputs
function parseWebDataToInputs(index) {
  siteNameInput.value = websitesList[index].name;
  siteUrlInput.value = websitesList[index].url;

  addWebBtn.innerHTML = "Update Website";
  isInUpdateMode = true;
  currentIndex = index;
  siteNameInput.focus();
}

// Clear all input fields
function clearAllInputFields() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
  siteNameInput.classList.remove("is-valid", "is-invalid");
  siteUrlInput.classList.remove("is-valid", "is-invalid");
  siteNameFeedback.classList.add("d-none");
  siteUrlFeedback.classList.add("d-none");
}

// Search
function search(value) {
  var result = [];

  for (var i = 0; i < websitesList.length; i++) {
    if (
      websitesList[i].name.toLowerCase().includes(value.toLowerCase().trim())
    ) {
      result.push(websitesList[i]);
    }
  }

  if (result.length == 0) {
    document.getElementById("tBody").innerHTML = `<tr>
              <td colspan="5">
                <h2 class="text-danger text-center py-4">No Websites Found With This Name</h2>
              </td>
            </tr>`;
  } else {
    displayWebsites(result);
  }
}

//  Change Mode
function changeMode() {
  var body = document.body;
  var dark = document.getElementById("dark");
  var light = document.getElementById("light");
  if (!isInLightMode) {
    body.classList.add("light-mode");
    light.classList.add("d-none");
    light.classList.remove("d-block");
    dark.classList.add("d-block");
    dark.classList.remove("d-none");
    isInLightMode = true;
  } else {
    body.classList.remove("light-mode");
    light.classList.add("d-block");
    light.classList.remove("d-none");
    dark.classList.add("d-none");
    dark.classList.remove("d-block");
    isInLightMode = false;
  }
}

// Add Event Listener for Enter Key
var inputs = document.getElementsByClassName("form-control");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
      addWebsite();
    }
  });
}
