// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("navBarUL")[0].style.paddingTop = "10px";
  } else {
    // Access the first element with class "navBarUL" and set its padding
    document.getElementsByClassName("navBarUL")[0].style.paddingTop = "30px";
  }
}
