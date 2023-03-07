const toggleBtn = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const linkInput = document.getElementById('link-input');
const linkBtn = document.querySelector('.link-btn');
const linkList = document.querySelector('.list')

toggleBtn.addEventListener('click', function (e){
    menu.classList.toggle('active')
})



linkBtn.addEventListener('click', function shortenLink (e) {
    e.preventDefault();
    console.log(linkInput)
    console.log(linkInput.value)
    if (linkInput.value){
        fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput}.value`)
        .then((res) => {
            if(!res.ok) throw new Error('url not valid');
            return res.json();
        })
        .then((data) => {
          console.log(data)
          let result = data.result.short_link;
          console.log(result);
          const output = `<div><p class="old-link">${linkInput.value}<p>
                               <p class="new-link">${result}</p>
                               <button>copy</button>
                           </div>`;
         linkList.insertAdjacentHTML("afterbegin", output);
          linkInput.value = "";
        })
       
    }
})



















