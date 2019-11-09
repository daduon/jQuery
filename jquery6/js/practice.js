$(document).ready(function () {
 $('button').on('click', function () {
  let user = $('#user').val();
  isUserNotEmpty(user);
 })
})
function error(e) {
 $(e).css('border', '5px solid red');
 $('.alert-danger').fadeIn(3000);
}
function success(u) {
 $(u).css('border', '5px solid green');
 $('.alert-success').fadeIn(3000);
}

function isUserNotEmpty(user) {
 if (user == "" || user.length <=3) {
  error('#user');
 } else {
  success('#user');
 }
}


