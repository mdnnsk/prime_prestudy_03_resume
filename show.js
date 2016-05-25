
$(document).ready(function() {
  $('.hidden').hide();
   var i = 0;
      $('button').on('click', function() {
        if (i==0) {
$('.hidden').toggle();
$('button').text('NO, MY EYES! HIDE IT!');
i+= 1;
}
else if (i==1){
  $('.hidden').toggle();
  $('button').text('I WANT TO SEE IT AGAIN!');
i-=1;
}
});
});
