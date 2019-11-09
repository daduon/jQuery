$(document).ready(function () {
  var result = "";
  $.ajax({
    dataType: "json",
    url: "https://jsonplaceholder.typicode.com/users",
    success: function (data) {
      data.forEach(element => {
        const { name, email, phone, website } = element;
        result += `
          <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${phone}</td>
            <td>${website}</td>
          </tr>
        `
      });
      $('.table').append(result);
    }
  })
  
});