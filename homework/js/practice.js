$(document).ready(function () {
 $('#select').on('click', function () {
  let select = $('#select').val();
  $('.alert-info').html(select);
 })
});