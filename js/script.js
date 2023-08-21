var macyInstance = Macy({
  container: ".masonry",
  mobileFirst: true,
  trueOrder: false,
  waitForImages: false,
  margin: 43,
  columns: 3,
  breakAt: {
    1200: 3,
    940: 2,
    520: 1,
  },
});

var menu = document.getElementById("menu");
var dropdownimg = document.getElementById("arrow-dropdown");
var search = document.getElementById("search");
var searchimg = document.getElementById("magn-glass");
function toggleMenu() {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
}

function toggleSearch() {
  if (search.classList.contains("hidden")) {
    search.classList.remove("hidden");
  } else {
    search.classList.add("hidden");
  }
}

window.onclick = function (event) {
  dropdownimg.style.transform = "rotate(180deg)";
  if (menu.classList.contains("hidden")) {
    dropdownimg.style.transform = "rotate(0deg)";
  }

  var dropdownWrapper = document.getElementById("dropdown-wrapper");
  if (
    !dropdownWrapper.contains(event.target) &&
    !menu.classList.contains("hidden")
  ) {
    menu.classList.add("hidden");
  }

  searchimg.style.transform = "rotate(90deg)";
  if (search.classList.contains("hidden")) {
    searchimg.style.transform = "rotate(0deg)";
  }
  var searchWrapper = document.getElementById("search-wrapper");
  if (
    !searchWrapper.contains(event.target) &&
    !search.classList.contains("hidden")
  ) {
    search.classList.add("hidden");
  }
};
