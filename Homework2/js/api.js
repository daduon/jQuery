$(document).ready(function () {
 $.ajax({
  dataType: "json",
  url: "https://pixabay.com/api/?key=14010091-6fc887d8f179a5dc0fe818556&q=green+vegetable&image_type=photo&pretty=true",
  success: function (data) {
    var result = "";
    data.hits.forEach(element => {
      result += `
    
           <div class="card shadow-lg mt-5" id="card">
              <div class="card-body">
                  <img src="${element.largeImageURL}" class= "img-fluid"/>
              </div>
              <div class="card-footer">
                <i class="material-icons" style="color:red;">favorite</i>
                <img src="${element.userImageURL}" class= "img-fluid rounded-circle" width="40"/>
                  ${element.tags}
                  <button class="btn btn-warning float-right" data-toggle="modal" data-target="#img${element.id}">View</button>
              </div>
              <div class="modal fade " role="dialog" id="img${element.id}">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header text-uppercase text-info">
                        <img src="${element.userImageURL}" class= "img-fluid rounded-circle"  width="40"/>&nbsp;
                       ${element.user}
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        <img src="${element.largeImageURL}" class="img-fluid"/>
                      <hr>
                      <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">&nbsp;<i class = "material-icons float-left text-primary">thumb_up</i>${element.likes}</li>

                        <li class="list-group-item">&nbsp;<i class = "material-icons float-left text-danger">favorite</i>${element.favorites}</li>

                        <li class="list-group-item">&nbsp;<i class = "material-icons float-left text-success">visibility</i>${element.views}</li>

                        <li class="list-group-item">&nbsp;<i class = "material-icons float-left text-warning">comment</i>${element.comments}</li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
           </div> 
    `
    });
   $('#card').append(result);
  }
 })
})