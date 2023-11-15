//Event
// document.addEventListener('DOMContentLoaded', showFoxRandomImages());
// const loader = document.getElementsByClassName('load')[0];
//
// //function for getting data from server and showing it on the web-page with async await and fetch
// //2) Через специальный синтаксис async/await, тоже с обработчиком ошибок
// async function showFoxRandomImages() {
//   loader.classList.toggle('active');
//   try {
//     let response = await fetch('https://randomfox.ca/floof/');
//     let data = await response.json();
//     const link_wrap = document.getElementsByClassName('link-wrap')[0];
//     const img_wrap = document.querySelector('.img-wrap');
//     const img = document.createElement('img');
//     img.classList.add('image');
//     const link = document.createElement('p');
//     link.classList.add('link-1');
//     img.src = data.image;
//     img.alt = data.link;
//     img_wrap.prepend(img);
//     link_wrap.append(img.alt);
//     return data;
//   } catch (err) {
//     err.message = 'Oops! Something went wrong.';
//     const wrap = document.querySelector('.general-wrap');
//     if (err) {
//       wrap.style.display = 'none';
//       const container1 = document.querySelector('.container');
//       document.body.style.backgroundColor = 'lightgrey';
//       container1.prepend(err);
//     }
//   }
// }
// showFoxRandomImages().finally(() => {
//   loader.classList.toggle('active');
// })



//1) Традиционным способом, с использованием цепочек промисов, включая обработку ошибок
//Event
// document.addEventListener('DOMContentLoaded', showRandomFoxes());

//function to show random images and link of foxes with promise and fetch
// function showRandomFoxes() {
//   loader.classList.toggle('active');
//   const fetchPromise = fetch("https://randomfox.ca/floof/"); //
//   fetchPromise.then(response => {
//     return response.json();
//   }).then(data => {
//     const link_wrap = document.getElementsByClassName('link-wrap')[0];
//     const img_wrap = document.querySelector('.img-wrap');
//     const img = document.createElement('img');
//     img.classList.add('image');
//     const link = document.createElement('p');
//     link.classList.add('link-1');
//     img.src = data.image;
//     img.alt = data.link;
//     img_wrap.prepend(img);
//     link_wrap.append(img.alt);
//
//   }).catch((err) => { //Ловим ошибку
//     err.message = 'Oops! Something went wrong.'; //Выводим текст ошибки
//     const wrap = document.querySelector('.general-wrap');
//     if (err) {
//       wrap.style.display = 'none';
//       const container1 = document.querySelector('.container');
//       document.body.style.backgroundColor = 'lightgrey';
//       container1.prepend(err);
//     }
//   }).finally(() => {
//     loader.classList.toggle('active');
//   })
// }


