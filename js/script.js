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

const navbar = document.getElementById("navbar");
const menu = document.getElementById("menu");
const dropdownimg = document.getElementById("arrow-dropdown");
const search = document.getElementById("search");
const searchimg = document.getElementById("magn-glass");

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

  const dropdownWrapper = document.getElementById("dropdown-wrapper");

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

  const searchWrapper = document.getElementById("search-wrapper");

  if (
    !searchWrapper.contains(event.target) &&
    !search.classList.contains("hidden")
  ) {
    search.classList.add("hidden");
  }
};

function Menu(e) {
  e.name === "menu"
    ? ((e.name = "close"),
      navbar.classList.add("top-[80px]"),
      navbar.classList.add("opacity-100"))
    : ((e.name = "menu"),
      navbar.classList.remove("top-[80px]"),
      navbar.classList.remove("opacity-100"));
}
