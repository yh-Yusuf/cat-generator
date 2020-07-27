function Cat() {
  var image=document.createElement('img');
  var div= document.getElementById('kitty');

   image.src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small";

   div.appendChild(image);

}
