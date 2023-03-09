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
            console.log(data);
          let result = data.result.short_link;
          const output = `<div class="output"><p class="old-link">${linkInput.value}<p>
                               <p class="new-link">${result}</p>
                               <div><button class="copy" id="copy">copy</button></div>
                           </div>`;
         linkList.insertAdjacentHTML("afterbegin", output);
          linkInput.value = "";
        })
       
     
       
    }
})

document.querySelector('body').addEventListener('click', function (e){
    const btn = e.target;
    if (btn.className === "copy"){
        btn.textContent = "Copied!";
        btn.style.backgroundColor = " hsl(257, 27%, 26%)";
        const newLink = document.querySelector('.new-link')
        navigator.clipboard.writeText(newLink.textContent);
        console.log(e.target)
    }
})



// function  copyToClipboard (){
//     Array.from(document.getElementsByClassName('copy')).forEach(btn => {
//         btn.addEventListener('click', (e) => {
//             console.log(e);
//         const el = e.target;
//         if (el === btn){
//             e.preventDefault();
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

// function copyToClipboard (){
//     let buttons = [...document.querySelectorAll(".copy")];
//     for (let index = 0; index < buttons.length; index++) {
//         console.log(buttons.length);
//       buttons[index].addEventListener("click", (e) => {
//          if (buttons[index] === e.target){
//                  console.log("yess");
//        }
//       })
// }
//     // buttons.forEach(btn => btn.addEventListener('click', (e) => {
//     //     buttons.map(item => {
//     //         if (item === e.target){
//     //             console.log("yess");
//     //         }
//     //     })
//     // }))
// }






















