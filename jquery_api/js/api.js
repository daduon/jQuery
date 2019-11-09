$(document).ready(function () {
 var url = "https://jsonplaceholder.typicode.com/users";
 $.getJSON(url, function (data) {
  let table = "";
  data.forEach(element => {
   const { name, email, phone, website } = element;
   table += `
    <tr>
     <td>${name}</td>
     <td>${email}</td>
     <td>${phone}</td>
     <td>${website}</td>
    </tr>
   `
  });
  $('.table').append(table);
  })
});