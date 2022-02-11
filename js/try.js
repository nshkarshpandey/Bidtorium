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
