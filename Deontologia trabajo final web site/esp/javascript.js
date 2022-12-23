// When the user scrolls down 50px from the top of the document, resize the navbar's padding
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "20px 10px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px";
  }
}