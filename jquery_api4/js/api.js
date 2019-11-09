$(document).ready(function () {
  $.ajax({
    dataType: "json",
    url: 'https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=yellow+computer&image_type=photo&pretty=true',
    success: function (data) {
      var result = "";
      data.hits.forEach(element => {
        result += `
          <div class="col-6">
              <div class="card shadow-lg mt-5">
                <div class="card-body ">
                    <img src = "${element.largeImageURL}" class="img-fluid">
                </div>
              </div>
              <div class= "card-footer">
                    <img src = "${element.userImageURL}" class="img-fluid rounded-circle" width="40">
                    ${element.user}
                    <i class="material-icons float-right">favorite</i>
                    <a href="animal.html" class="btn btn-info float-right btn-sm">View</a>
              </div>
          </div>
        `
      });
      $("#sey").append(result);
    }
  });
});