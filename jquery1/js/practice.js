$(document).ready(function () {
 $('#btn-hide').click(function () {
  
  // $('h1').hide();
  $('h1').fadeOut(3000);
 });

 $('#btn-show').click(function () {
  $('h1').fadeIn(3000);
  // $('h1').show();
  
 });
});