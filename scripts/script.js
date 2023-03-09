const toggleBtn = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const linkInput = document.getElementById('link-input');
const linkBtn = document.querySelector('.link-btn');
const linkList = document.querySelector('.list');
const copy = document.querySelectorAll('.copy') ;
const output = document.querySelectorAll('.output')


toggleBtn.addEventListener('click', function (e){
    menu.classList.toggle('active')
})




linkBtn.addEventListener('click', function shortenLink (e) {
    e.preventDefault();
    if (linkInput.value){
        fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`)
        .then((res) => {
            if(!res.ok) throw new Error('url not valid');
            return res.json();
        })
        .then((data) => {
          let result = data.result.short_link;
          const output = `<div class="output"><p class="old-link">${linkInput.value}<p>
                               <p class="new-link">${result}</p>
                               <div><button class="copy" id="copy" onclick="copyToClipboard()">copy</button></div>
                           </div>`;
         linkList.insertAdjacentHTML("afterbegin", output);
          linkInput.value = "";
        })
       
     
        
    }
})


// function  copyToClipboard (){
//     Array.from(document.getElementsByClassName('copy')).forEach(btn => {
//         btn.addEventListener('click', (e) => {
//             console.log(e);
//         const el = e.target;
//         if (el === btn[i]){
//         // console.log(e.target);
//         btn.setAttribute("style" , "background-color: hsl(257, 27%, 26%);");
//         btn.textContent = "Copied!";

//         const newLink = document.querySelectorAll('.new-link').forEach((link) => {
//         navigator.clipboard.writeText(link.textContent);
//         console.log(link.textContent);
//     })
//         }
           
//         })
//     })
// }

function copyToClipboard (){
    let buttons = [...document.querySelectorAll(".copy")];
    for (let index = 0; index < buttons.length; index++) {
        console.log(buttons.length);
      buttons[index].addEventListener("click", (e) => {
         if (buttons[index] === e.target){
                 console.log("yess");
       }
      })
}
    // buttons.forEach(btn => btn.addEventListener('click', (e) => {
    //     buttons.map(item => {
    //         if (item === e.target){
    //             console.log("yess");
    //         }
    //     })
    // }))
}

// output.forEach(el => el.addEventListener("click", (e) => {
//     console.log(e.target)
//     if (e.target.className === "copy"){
//         console.log(e.target);
//     }
// }))







// let copyBtn = [...document.querySelectorAll('.copy')];
// copyBtn.forEach(el => el.addEventListener("click", (e) => {
//     copyBtn.map(item => {
//         if (item === e.target){
//             item.textContent = "Copied!"
//         }
//     })
// }))
// document.querySelector('body').addEventListener('click', function (e){
//     if (e.target.className === "copy"){
     

//         const newLink = document.querySelector('.new-link')
//         navigator.clipboard.writeText(newLink.textContent);
//         console.log(newLink.textContent);
//     }
// })











