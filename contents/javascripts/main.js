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

  var buttons = document.body.querySelectorAll("[data-role-toggle]");

  console.log(buttons);
 
  for (var i = buttons.length - 1; i >= 0; i--) {

    buttons[i].addEventListener('click', function(e){

      e.preventDefault();

      var enlace = this.getAttribute("data-role-toggle");

      var capa = document.querySelector("[data-role-toggle-content=" + enlace + "]");

      capa.classList.toggle('is-visible');
   	  
    })
  }

  var b = document.body;
  var s = document.querySelector('[data-slide-shadow]');
  var p = document.querySelector('[data-slide-toggle-content]'); 
  var slide_toggle = document.querySelectorAll('[data-slide-toggle]');

  for (var i = slide_toggle.length - 1; i >= 0; i--) {

  	slide_toggle[i].addEventListener('click', function(e){

  		e.preventDefault();

  		let d = this.getAttribute('data-slide-toggle');
  		let c = document.querySelector('[data-slide-toggle-content=' + d + ']');
  		
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

  s.addEventListener('click', function(e){
    s.classList.toggle('is-active');
    b.classList.remove('disable-vscroll');
    var o = document.querySelectorAll('[data-slide-toggle-content]');
      for (var i = o.length - 1; i >= 0; i--) {
        let c = o[i].classList;
        let r = c.remove('is-slide-right');
        let l = c.remove('is-slide-left');
      }
  })
    
})();



