// TOGGLE VISIBILITY

// Show an element
// var show = function (elem) {
//   elem.classList.add('is-visible');
// };

// // Hide an element
// var hide = function (elem) {
//   elem.classList.remove('is-visible');
// };

// // Toggle element visibility
// var toggle = function (elem) {
//   elem.classList.toggle('is-visible');
// };

// // Listen for click events
// document.addEventListener('click', function (event) {

//   //Make sure clicked element is our toggle
//   if (!event.target.classList.contains('toggle')) return;

//   //Prevent default link behavior
//   event.preventDefault();

//   //Get the content
//   var content = document.querySelector(event.target.hash);
//   if (!content) return;

//   //Toggle the content
//   toggle(content);

// }, false);

  
(function(){

  var buttons = document.querySelectorAll("[data-role-toggle]");
 
  for (var i = buttons.length - 1; i >= 0; i--) {

    buttons[i].addEventListener('click', function(e){

      e.preventDefault();

      var enlace = this.getAttribute("data-role-toggle");

      var capa = document.querySelector("[data-role-toggle-content=" + enlace + "]");

      capa.classList.toggle('is-visible');
   	  
    })
  }




  var slide_toggle = document.querySelectorAll("[data-slide-toggle]");

  for (var i = slide_toggle.length - 1; i >= 0; i--) {

  	slide_toggle[i].addEventListener('click', function(e){

  		e.preventDefault();

  		var s = document.getElementById('c-mask');

  		console.log(s);

  		var d = this.getAttribute("data-slide-toggle");
  		var c = document.querySelector("[data-slide-toggle-content=" + d + "]");
  		var b = document.body;

  		console.log(b);
		
		switch (d) {

			case 'slideRight':
			   c.classList.toggle('is-slide-right');
			   b.classList.toggle('disable-vscroll');
			   s.classList.toggle('is-active');
			   break;
			case 'slideLeft':
			   c.classList.toggle('is-slide-left');
			   b.classList.toggle('disable-vscroll');
			   s.classList.toggle('is-active');
			   break;
			default:
			   c.classList.toggle('');
		}
  	})

  }
    
})();



