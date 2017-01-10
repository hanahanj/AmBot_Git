

  window.onload = function() {

    var placeholder = document.querySelector(".placeholder"),
    large = placeholder.querySelector(".img-large")

  // 1: load small image and show it
  var img = new Image();
  img.src = large.src;
  img.onload = function () {
   large.classList.add('loaded');
 };

  // 2: load large image
  var imgLarge = new Image();
  imgLarge.src = placeholder.dataset.large; 
  imgLarge.onload = function () {
    imgLarge.classList.add('loaded');
  };
  placeholder.appendChild("imgLarge");

}