
// Part Top-menu
var btnMenu = document.getElementById("icon");
var menu = document.getElementById("mobile");
(function() {
 
  var toggles = document.querySelectorAll(".c-hamburger");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      if (menu.style.display === "block") {
      	menu.style.display = "none";
      	btnMenu.classList.remove('close');

      } else {
      	menu.style.display = "block";
      	btnMenu.classList.add('close');
      }
       
    });
  }
 
})();
//Show block phones
var btnPhone = document.getElementById('phone');
var contacts = document.getElementById('contacts');
btnPhone.addEventListener('click', function(event){
		contacts.classList.toggle('show-block');
		btnPhone.classList.toggle('phone-bg')
	});




// Button Up
(function() {

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

