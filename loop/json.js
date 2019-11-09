// const url = "https://jsonplaceholder.typicode.com/posts";
// async function data() {
//  const response = await fetch(url);
//  const result = await response.json();
//  await result.forEach(element => {
//   console.log(element);
//  });

// }
// data();

// const url = "https://jsonplaceholder.typicode.com/posts";
// fetch(url)
//  .then(response => response.json())
//  .then(data => {
//   data.forEach(element => {
//    console.log(element);
//   });
//  })
//  .catch(() => console.error("error"))
// .finally(() => console.warn("run auto")
// )

// const url = "https://jsonplaceholder.typicode.com/posts";
// const method = "GET";
// const syncrouse = true;
// const data = new XMLHttpRequest();
// data.open(method, url, syncrouse);
// data.onload = () => {
//  const result = JSON.parse(data.response);
//  console.log(result);
// }
// data.send();