// TOGGLE VISIBILITY

    // var toggle_visibility = (function() {
    //     function toggle(cl) {
    //         var els = document.getElementsByClassName(cl);
    //         for (var i = 0; i < els.length; ++i) {
    //             var s = els[i].style;
    //             s.display = s.display === 'none' ? 'block' : 'none';
    //         };
    //     }
    //     return function(cl) {
    //         if (cl instanceof Array) {
    //             for (var i = 0; i < cl.length; ++i) {
    //                 toggle(cl[i]);
    //             }
    //         } else {
    //             toggle(cl);
    //         }
    //     };
    // })();
    // USAGE:
    //  toggle_visibility('myclass');
    //  toggle_visibility(['myclass1','myclass2','myclass3']);



// Show an element
var show = function (elem) {
  elem.classList.add('is-visible');
};

// Hide an element
var hide = function (elem) {
  elem.classList.remove('is-visible');
};

// Toggle element visibility
var toggle = function (elem) {
  elem.classList.toggle('is-visible');
};

// Listen for click events
document.addEventListener('click', function (event) {

  // Make sure clicked element is our toggle
  if (!event.target.classList.contains('toggle')) return;

  // Prevent default link behavior
  event.preventDefault();

  // Get the content
  var content = document.querySelector(event.target.hash);
  if (!content) return;

  // Toggle the content
  toggle(content);

}, false);