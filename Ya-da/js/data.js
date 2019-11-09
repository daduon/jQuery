$(document).ready(function () {
 db.collection('student').get().then((snapshot) => {
  var output = "";
  snapshot.forEach(element => {
   output += `
      <div class="card shadow-lg mt-4">
          <div class="card-header">
             <img src="${element.data().profile_image}" style="border-radius:50%" height="50" width="50" >
              ${element.data().name}
              <button class="btn btn-info float-right" onclick="deleteFile('${element.id}')">&times;</button>
          </div>
          <div class="card-body">
             <img src="${element.data().post}" class="img-fluid">
          </div>
      </div>
      <div class="container mt-3">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal${element.id}">
    View
  </button>
  <div class="modal fade" id="myModal${element.id}">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
         <img src="${element.data().profile_image}" style="border-radius:50%" height="50" width="50" >
          <button type="button" class="close" data-dismiss="modal">×</button>
        </div>
        <div class="modal-body">
           <img src="${element.data().post}" class="img-fluid">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
   `
  });
  $('#result').append(output);
 });
 $('button').on('click', function () {
  var name = $('#name').val();
  var profile = $('#pro').val();
  var post = $('#post').val();

  db.collection('student').add({
   name: name,
   profile_image: profile,
   post: post,
  })
 });
});

function deleteFile(fileID) {
 db.collection('student').doc(fileID).delete();
}