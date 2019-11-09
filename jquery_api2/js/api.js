$(function () {
  $('button').on('click', function () {
    var user = $('#user').val();
    var pass = $('#pass').val();
    already(user);
    alreadys(pass);
  });
});

function ifSuccess(success) {
  $( "#" + success).addClass('border-success').removeClass('border-danger');
}
function ifError(error) {
  $("#" + error).addClass('border-danger').removeClass('border-success');
}

function already(u) {
  if(u !=""){
    ifSuccess('user');
  } else {
    ifError('user');
  }
}
function alreadys(p) {
  if (p != "") {
    ifSuccess('pass');
  } else {
    ifError('pass');
  }
}