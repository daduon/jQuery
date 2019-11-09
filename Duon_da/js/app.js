$(document).ready(function () {
 db.collection('Homework').get().then((store) => {
  var ouput = "";
  store.forEach(element => {
   ouput += `
     <div class="card shadow-lg mt-4">
       <div class="card-header">
         <img src="${element.data().profile}" style="border-radius:50%" width="50" height="50"/>
         ${element.data().name}
         <button type="button" class="btn btn-info float-right" data-toggle="modal" data-target="#myImg${element.id}">View
         </button>
       </div>
       <div class="card-body">
         <img src="${element.data().post}" class="img-fluid"/>
       </div>
       <div class="card">
          ${element.data().text}
        </div>
       <div class="card-footer">
         <button type="button" class="btn btn-danger float-right" onclick="deleteImg('${element.id}')">Delete</button>
       </div>
     </div>
    <div class="container mt-4">
      <div class="modal fade" id="myImg${element.id}">
      <div class="modal-dialog">
       <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
           <img src="${element.data().post}" class="img-fluid"/>
        </div>
       </div>
      </div>
     </div>
    </div>
   `;
  });
  $('#result').append(ouput);
 });
  $("#add").on('click', function () {
    var re = document.querySelector("#add-form");
      var name = $('#name').val();
      var pro = $('#pro').val();
      var post = $('#post').val();
      var text = $('#text').val();
    re.reset();
      db.collection('Homework').add({
        name: name,
        profile: pro,
        post: post,
        text: text,
      });
  });
});

function deleteImg(fileId) {
  db.collection('Homework').doc(fileId).delete();
}