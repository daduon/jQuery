
$(document).ready(function () {
 $('#show').on('click', function () {
  $.ajax({
   dataType: "json",
   url: "https://pixabay.com/api/?key=14010091-6fc887d8f179a5dc0fe818556&q=green+vegetable&image_type=photo&pretty=true",
   success: function (data) {
    var api = "";
    data.hits.forEach(element => {
     api += `
     <div class="card shadow-lg mt-5">
      <div class="card-header">
        <img src="${element.userImageURL}" style="border-radius:50%" width="50" height="50"/>
        ${element.user}
        <button type="button" class="btn btn-info float-right" data-toggle="modal" data-target="#img${element.id}">View</button>
      </div>
      <div class="card-body">
       <img src="${element.largeImageURL}" class="img-fluid"/>
      </div>
     </div>

     <div class="modal fade" id="img${element.id}">
      <div class="modal-dialog">
       <div class="modal-content">
        <div class="modal-header">
           <img src="${element.userImageURL}" style="border-radius:50%" width="50" height="50" float-right/>
           <button class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
         <img src="${element.largeImageURL}" class="img-fluid"/>
          <div class="card">,
             <ul class="list-group list-group-horizontal">
            <li class="list-group-item">
             <i class="material-icons float-left">favorite</i>${element.likes}
            </li>
            <li class="list-group-item">
             <i class="material-icons float-left">favorite</i>${element.likes}
            </li>
            <li class="list-group-item">
             <i class="material-icons float-left">favorite</i>${element.likes}
            </li>
            <li class="list-group-item">
             <i class="material-icons float-left">favorite</i>${element.likes}
            </li>
         </ul>
          </div>
        </div>
       </div>
      </div>
     </div>
    `
    });
    $("#result").append(api);
   }
  });
 });
});