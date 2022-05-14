const text = "Ah yes, Lavender, the white rabbit.";

let index = 0;

const writeText = () => {
  document.body.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }
};

setInterval(writeText, 1000);
