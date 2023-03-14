const toggleBtn = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const linkInput = document.getElementById("link-input");
const linkBtn = document.getElementById("link-btn");
const linkList = document.querySelector(".list");
const copy = document.querySelectorAll(".copy");
const output = document.querySelectorAll(".output");

toggleBtn.addEventListener('click', function (e){
    menu.classList.toggle('active')
})

linkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (linkInput.value) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${linkInput.value}`)
      .then((res) => {
        if (!res.ok) throw new Error("url not valid");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        let result = data.result.short_link;
        updateUI(result);
      });
  }
});

function updateUI(result) {
  const output = `<div class="output"><p class="old-link">${linkInput.value}<p>
                        <p class="new-link">${result}</p>
                        <div><button class="copy" id="copy">copy</button></div>
                    </div>`;
  linkList.insertAdjacentHTML("afterbegin", output);
  linkInput.value = "";

  const btn = document.getElementById("copy");

  btn.addEventListener("click", function (e) {
    btn.textContent = "Copied!";
    btn.style.backgroundColor = " hsl(257, 27%, 26%)";
    const newLink = document.querySelector(".new-link");
    navigator.clipboard.writeText(newLink.textContent);
    console.log(e.target);
  });
}
