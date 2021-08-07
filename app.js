const btn = document.querySelector("button");

btn.addEventListener('click', function (){
    let random1 = Math.floor(Math.random() * 256) + 1;
    let random2 = Math.floor(Math.random() * 256) + 1;
    let random3 = Math.floor(Math.random() * 256) + 1;
    // let bgColor = document.querySelector('body');
    let color = `rgb(${random1}, ${random2}, ${random3})`;

    const label = document.querySelector("h1");
    label.innerText = color;

    // label.setAttribute("style", "background-color: rgb(${random1}/${random2}/${random3});");
    document.body.style.backgroundColor = color;
    label.appendChild(label);
});