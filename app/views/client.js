console.log("Hello World");

// document means client-side js
// select form class from html page
const form = document.querySelector('form');
// select the contents which are stored in a loading class ie the gif
const loadingElement = document.querySelector('.loading');
// select the contents stored in the mews class
const diagnosisElement = document.querySelector('.diagnosis');
// where the server is
const API_URL = "http://localhost:5000/getDiagnosis";


loadingElement.style.display = "none";


// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const formData = new FormData(form);
//     const name = formData.get('name');
//     const content = formData.get('content');
//     console.log("form was submitted");

//     const data = {
//         name,
//         content
//     }

//     // form.style.display = 'none';
//     console.log(data);
//     // loadingElement.style.display = '';

//     // fetch(API_URL, {
//     //         method: 'POST',
//     //         body: JSON.stringify(data),
//     //         headers: {
//     //             'content-type': 'application/json'
//     //         }
//     //     }).then(response => response.json())
//     //     .then(description => {
//     //         console.log(description);
//     //         form.reset();
//     //         // setTimeout(() => {
//     //         // }, 30000);
//     //         // listAllMews();
//     //         form.style.display = '';
//     //         loadingElement.style.display = 'none'
//     //     });
// });

// function listAllMews() {
//     mewsElement.innerHTML = '';
//     fetch(API_URL)
//         .then(response => response.json())
//         .then(mews => {
//             console.log(mews)
//             mews.reverse();
//             mews.forEach(mew => {
//                 const div = document.createElement('div');

//                 const header = document.createElement('h3');
//                 header.textContent = mew.name;

//                 const contents = document.createElement('p');
//                 contents.textContent = mew.content;

//                 const date = document.createElement('small');
//                 date.textContent = new Date(mew.created);

//                 div.appendChild(header);
//                 div.appendChild(contents);
//                 div.appendChild(date);

//                 mewsElement.appendChild(div);
//             });
//         });
// }