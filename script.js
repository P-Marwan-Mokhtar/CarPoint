let header = document.querySelector("header");
let search = document.querySelector(".i-search");
let links = document.querySelector(".links");
window.onscroll = function () {
  if (this.scrollY >= 100) {
    header.classList.add("active");
    search.classList.add("active");
  } else {
    header.classList.remove("active");
    search.classList.remove("active");
  }
};
function open_menu() {
  links.classList.add("active");
}
function close_menu() {
  links.classList.remove("active");

}

