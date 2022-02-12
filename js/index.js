$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


/* flip cards*/
$(document).ready(function() {

  var front_b_1 = '.front_b_1';
  var back_b_1 = '.back_b_1'

  $(front_b_1).click(function() {
    $('.flip-card-1').toggleClass('flipped');
    return false;
  });

  $(back_b_1).click(function(){
    $('.flip-card-1').toggleClass('flipped')
    return false
  })

  });

$(document).ready(function() {

  var front_b_2 = '.front_b_2';
  var back_b_2 = '.back_b_2'

  $(front_b_2).click(function() {
    $('.flip-card-2').toggleClass('flipped');
    return false;
  });

  $(back_b_2).click(function(){
    $('.flip-card-2').toggleClass('flipped')
    return false
  })

  });

$(document).ready(function() {

  var front_b_3 = '.front_b_3';
  var back_b_3 = '.back_b_3'

  $(front_b_3).click(function() {
    $('.flip-card-3').toggleClass('flipped');
    return false;
  });

  $(back_b_3).click(function(){
    $('.flip-card-3').toggleClass('flipped')
    return false
  })

  });

$(document).ready(function() {

  var front_b_4 = '.front_b_4';
  var back_b_4 = '.back_b_4'

  $(front_b_4).click(function() {
    $('.flip-card-4').toggleClass('flipped');
    return false;
  });

  $(back_b_4).click(function(){
    $('.flip-card-4').toggleClass('flipped')
    return false
  })

  });

$(document).ready(function() {

  var front_b_5 = '.front_b_5';
  var back_b_5 = '.back_b_5'

  $(front_b_5).click(function() {
    $('.flip-card-5').toggleClass('flipped');
    return false;
  });

  $(back_b_5).click(function(){
    $('.flip-card-5').toggleClass('flipped')
    return false
  })

  });

$(document).ready(function() {

  var front_b_6 = '.front_b_6';
  var back_b_6 = '.back_b_6'

  $(front_b_6).click(function() {
    $('.flip-card-6').toggleClass('flipped');
    return false;
  });

  $(back_b_6).click(function(){
    $('.flip-card-6').toggleClass('flipped')
    return false
  })

  });

$(document).ready(function() {

  var front_b_7 = '.front_b_7';
  var back_b_7 = '.back_b_7'

  $(front_b_7).click(function() {
    $('.flip-card-7').toggleClass('flipped');
    return false;
  });

  $(back_b_7).click(function(){
    $('.flip-card-7').toggleClass('flipped')
    return false
  })

  });

$(document).ready(function() {

  var front_b_8 = '.front_b_8';
  var back_b_8 = '.back_b_8'

  $(front_b_8).click(function() {
    $('.flip-card-8').toggleClass('flipped');
    return false;
  });

  $(back_b_8).click(function(){
    $('.flip-card-8').toggleClass('flipped')
    return false
  })

  });

$(document).ready(function() {

  var front_b_9 = '.front_b_9';
  var back_b_9 = '.back_b_9'

  $(front_b_9).click(function() {
    $('.flip-card-9').toggleClass('flipped');
    return false;
  });

  $(back_b_9).click(function(){
    $('.flip-card-9').toggleClass('flipped')
    return false
  })

  });

$(document).ready(function() {

  var front_b_10 = '.front_b_10';
  var back_b_10 = '.back_b_10'

  $(front_b_10).click(function() {
    $('.flip-card-10').toggleClass('flipped');
    return false;
  });

  $(back_b_10).click(function(){
    $('.flip-card-10').toggleClass('flipped')
    return false
  })

  }); 
/* flip cards end */

function openNav(){
  document.getElementById("myNav").style.width = "25%";
}

function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}

/*for sticky*/

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


/*sticky end*/

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
// toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
            
    // toggle the icon
    this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}