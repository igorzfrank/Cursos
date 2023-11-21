const url = "https://jsonplaceholder.typicode.com/posts/";
const options = {
  method: "POST",
  body: '{"title": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(url, options)
  .then((r) => r.json())
  .then((json) => console.log(json));


//   GET
//   Puxa informação, utilizado para pegar posts, usuários e etc.
  
//   POST
//   Utilizado para criar posts, usuários e etc.
  
//   PUT
//   Geralmente utilizado para atualizar informações.
  
//   DELETE
//   Deleta uma informação.
  
//   HEAD
//   Puxa apenas os headers.