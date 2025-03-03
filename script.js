window.onscroll = function() {scrollFunction()};
function scrollFunction() {
        if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
        mybutton.style.display = "block";
        } else {
        mybutton.style.display = "none";
        }
    }
function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}  