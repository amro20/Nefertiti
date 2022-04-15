let paragraph = document.querySelector("p");
let text = "تألقي بسحرك الخاص";
let index = 1;

function writeText() {
  paragraph.textContent = text.slice(0, index);
  index++;
  if (index > text.length) {
    clearInterval(loop);
  }
}

let loop = setInterval(function () {
  writeText();
}, 230);
