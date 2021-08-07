const btn = document.querySelector("button");

btn.addEventListener('click', function (){
    let random1 = Math.floor(Math.random() * 256) + 1;
    let random2 = Math.floor(Math.random() * 256) + 1;
    let random3 = Math.floor(Math.random() * 256) + 1;
    let bgcolor = docutment.querySelector('body');

    const label = document.querySelector("h1");
    label.innerText = `rgb(${random1}/${random2}/${random3})`;

    label.appendChild(label);
    bgcolor.appendChild("<style>body{background-color:rgb(${random1}/${random2}/${random3})}</style>");
    // document.head.insertAdjacentHTML("beforeend", `<style>body{background:rgb(${random1}/${random2}/${random3})}</style>`);
});