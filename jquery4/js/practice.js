$(document).ready(function () {
 $('#btn').click(function () {
  $('th').css('background-color', 'red').hide();
  $('td').css('background-color', 'teal').hide();
 })
 $('#btm').click(function () {
  $('th').css('background-color', 'red').show();
  $('td').css('background-color', 'teal').show();
 })
})