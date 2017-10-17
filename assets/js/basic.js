//add class to nav links

document.addEventListener("DOMContentLoaded", function() {
  changeActiveLink();
});

function changeActiveLink() {
  var links = document.getElementsByClassName('page-links');

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function() {
      if (links[i].classList.contains('currentLink')) {
        links[i].classList.remove('currentLink');
      } else {
        links[i].classList.add('currentLink');
      }
    };
  }
}
