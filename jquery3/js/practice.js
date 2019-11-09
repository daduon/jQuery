// $(document).ready(function () {
//  $('button').click(function () {
//   //$('h1,p,strong').toggle();
//   $('#js,.pnc,strong').fadeToggle(300);
//  });
// });

$(document).ready(function () {
 $('.btn').click(function () {
  $('li:nth-child(1)').css('background-color', 'red').fadeToggle(250);
  $('li:nth-child(2)').css('background-color', 'teal').fadeToggle(1280);
  $('li:nth-child(3)').css('background-color', 'blue').fadeToggle(2300);

 })
});