$(document).ready(function () {
 $('#text').on('keyup', function () {
  let text = $('#text').val();
  $('.alert-success').css('color','red').html(text);
  var border = text.length;
  var color = text.length;
  if (color < 10) {
   $('#text').css('color', 'pink');
  } else {
   $('#text').css('color', 'red');
  }
  if (border < 10) {
   $('#text').css('border', '5px solid red');
  } else {
   $('#text').css('border', '5px solid green');
  }
  if (text == "") {
   $('.alert-success').fadeOut(3000);
  } else {
   $('.alert-success').fadeIn(3000);
  }
 })
 $('#description').on('keyup', function () {
  let description = $('#description').val();
  $('.alert-danger').html(description);
 })
 $('#subject').on('click', function () {
  let select = $('#subject').val();
  $('.alert-warning').html(select);
 })
 $('.gender').on('click', function () {
  let gender = $('.gender:checked').val();
  $('.alert-info').html(gender);
 })
 $('.fruit').on('click', function () {
  let fruit = "";
  $('.fruit:checked').each(function () {
   fruit += $(this).val() + "<br>";
  })

  let counter = $('[type=checkbox]:checked').length;
  $('.alert-dark').html(fruit + "" + counter);
  // alert("You click" + counter + "time");
 })
})