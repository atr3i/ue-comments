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
      console.log(capa);
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
           c.focus();
  			   b.classList.toggle('disable-vscroll');
  			   s.classList.toggle('is-active'); 
  			   break;
  			case 'slideLeft':
  			   c.classList.toggle('is-slide-left');
           c.focus();
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

      //event.target.setFocus('ue-c-textarea', 'ue-c-input');
      // event.target.style.background = 'pink';

    }, true);
  }
  
  function formFlow(elem) {
    
    var buttonVerify = elem.querySelectorAll('[data-form=verifyUser]');
    var checkUser = elem.querySelectorAll('[data-form-content=verifyUser]');
    var publishComment = elem.querySelectorAll('[data-form=publishComment]'); 
    var messageOk = elem.querySelectorAll('[data-form-message=confirm]');
    var buttonSubmit = elem.querySelectorAll('[data-form=submitComment]'); 
    var formFields = elem.getElementsByClassName("ue-c-comments-form")[0];
    //var messageError = elem.querySelector('[data-form-message=error]');

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

    // var viewport = document.querySelectorAll('[data-form]');
    // var allInputs = document.getElementsByTagName('input');

    // var panel = document.querySelector('[data-slide-toggle-content]');

    

    // for( var i=0; i<allInputs.length && i<viewport.length; i++) {

    //     var zone = viewport[i];
    //     var item = allInputs[i];
       
    //     item.onfocus = function() {
    //         this.style.background = "pink"; 
    //         console.log('set focus event handler on', item);
    //         panel.scrollTo(0, window.innerHeight);
    //         console.log(window.innerHeight);
    //     }
    // };

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

 
  var selectOptions = document.querySelector('[data-select=filters]');
  var chk = document.getElementById('switch');
  var chkLayer = document.querySelector('[data-select-content=myMentions]');
  

  function optionCheck(e) {
      // loop through the options
      for (i = 0, x = selectOptions.options.length; i < x; i++) {

          // get the selected option value
          vl = selectOptions.options[i].value;

          // find the corresponding help div
          helpDiv = document.querySelector('[data-select-content='+ vl +']');
          
          // move on if we didn't find one
          if (!helpDiv) { continue; }

          if(selectOptions.options[i].selected) {
            helpDiv.classList.add('is-visible');
            chk.checked = false;
            chkLayer.classList.remove('is-visible');
          
          } else {
            helpDiv.classList.remove('is-visible');
          }
      }
  }
   
  var layers = document.querySelectorAll('[data-select-content]');
  function switchCheck(e) {

    for (var i = layers.length - 1; i >= 0; i--) {

      if(chk.checked == true) {
          chkLayer.classList.add('is-visible');
          layers[i].classList.remove('is-visible');
          selectOptions.disabled = true;
        } else { 
          chkLayer.classList.remove('is-visible'); 
          layers[0].classList.add('is-visible');
          selectOptions.disabled = false;
          selectOptions.selectedIndex = 0;
        } 
    }
  }   
 
  document.addEventListener('DOMContentLoaded',function() {

    selectOptions.onchange = optionCheck;
    chk.onchange = switchCheck;

  }, false);


  function resetFields(elem) {
    elem.reset();
  }


  var scrollButton = document.querySelector('[data-badge]');
  var elemPanel = document.querySelector('[data-slide-toggle-content]');
  var topPos = elemPanel.offsetTop;

  scrollButton.addEventListener('click', function(e){

    event.preventDefault();

    scrollTo(elemPanel, topPos-10, 600);

   // console.log(scrollButton, elemPanel, topPos);

  })

  function scrollTo(elem, to, duration) {

    var start = elem.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
    var animateScroll = function() {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        elem.scrollTop = val;
        if(currentTime < duration) {
          setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
  }

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };



})();

