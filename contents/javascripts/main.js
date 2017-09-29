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
 
  for (var i = buttons.length - 1; i >= 0; i--) {

    buttons[i].addEventListener('click', function(e){

      e.preventDefault();

      let enlace = this.getAttribute("data-role-toggle");
      let capa = document.querySelectorAll("[data-role-toggle-content=" + enlace + "]");

      for (var i = capa.length - 1; i >= 0; i--) {
        capa[i].classList.toggle('is-visible');
      }
    })
  }

  var b = document.body;
  var s = document.querySelector('[data-slide-shadow]');
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
    let o = document.querySelectorAll('[data-slide-toggle-content]');
      for (var i = o.length - 1; i >= 0; i--) {
        let c = o[i].classList;
        let r = c.remove('is-slide-right');
        let l = c.remove('is-slide-left');
      }
  })
  
  var joinAll = document.querySelectorAll('[data-form=joinThread]');
  
  for (var i = joinAll.length - 1; i >= 0; i--) {  
    
    joinAll[i].addEventListener ('focus', function(){

      formFlow(this);
      // event.target.style.background = 'pink';

    }, true);
  }

 
  function formFlow(elem) {
    
    var buttonVerify = elem.querySelectorAll('[data-form=verifyUser]');
    var checkUser = elem.querySelectorAll('[data-form-content=verifyUser]');
    var publishComment = elem.querySelectorAll('[data-form=publishComment]'); 
    var messageOk = elem.querySelectorAll('[data-form-message=confirm]');
    //var messageError = elem.querySelector('[data-form-message=error]');
    var formFields = elem.getElementsByClassName("ue-c-form")[0];
    var buttonSubmit = elem.querySelectorAll('[data-form=submitComment]'); 

    for (var i = buttonVerify.length - 1; i >= 0; i--) {

      buttonVerify[i].addEventListener('click', function(e){
        
        e.preventDefault();

        for (var i = checkUser.length - 1 && publishComment.length -1; i >= 0; i--) {
          checkUser[i].classList.remove('is-hidden');
          publishComment[i].classList.add('is-hidden');
        }
      })
    }


    for (var i = buttonSubmit.length - 1; i >= 0; i--) {

      buttonSubmit[i].addEventListener('click', function(e){

        e.preventDefault();
        
        for (var i = checkUser.length - 1 && publishComment.length -1 && messageOk.length -1; i >= 0; i--) {

          checkUser[i].classList.add('is-hidden');
          publishComment[i].classList.remove('is-hidden');

          messageOk[i].classList.remove('is-hidden');
          messageOk[i].classList.remove('has-fade-out');
          messageOk[i].classList.add('has-fade-in');
          fadeAway(messageOk[i]);

        }

        resetFields(formFields);

      })
    }

  }

  function fadeAway(elem) {
    setTimeout(function() {
        elem.classList.remove('has-fade-in');
        elem.classList.add('has-fade-out');
    }, 2000);

    setTimeout(function() {
        elem.classList.add('is-hidden');
        // if(elem1.parentNode) {
        //   elem1.parentNode.removeChild(elem1);
        // }
    }, 2500);

  }

  function resetFields(elem) {
    elem.reset();
  }

})();



