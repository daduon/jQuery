$(document).ready(function () {
  $.ajax({
    dataType: "json",
    url: 'https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=yellow+flowers&image_type=photo&pretty=true',
    success: function (data) {
      var img = "";
      data.hits.forEach(element => {
        img += `
          <div class= "card-body">
            <img src="${element.largeImageURL}" class="img-fluid">
          </div>
          <div class="card-footer"> 
            <img src="${element.userImageURL}" class="img-fluid rounded-circle" width="40">
            <img src="${element.previewURL}" class="img-fluid img-thumbnail float-left" width="60">
            <i class="material-icons float-right text-danger">favorite</i>
            ${element.tags}
          </div>
        `
      });
      $('#card').append(img);
    }
  });
});