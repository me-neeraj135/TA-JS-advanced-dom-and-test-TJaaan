let form = document.querySelector(`form`);
let ul = document.querySelector(`.root`);
let dataCards = [];
form.addEventListener(`submit`, e => {
  e.preventDefault();
  let inputValue = e.target.elements.items.value;
  console.log(inputValue);
  createUI(inputValue);

  function createUI(data = dataCards) {
    innerHTML = ``;
    let li = document.createElement(`li`);
    li.setAttribute(`draggable`, `true`);
    let p = document.createElement(`p`);
    p.innerHTML = inputValue;
    let span = document.createElement(`span`);
    span.innerHTML = `drag me`;

    li.append(p, span);
    ul.append(li);

    li.addEventListener(`dragstart`, e => {
      console.log(`drag-start`);

      e.dataTransfer;
    });

    li.addEventListener(`dra`, e => {
      console.log(`drag`);
    });
    li.addEventListener(`dragenter`, e => {
      console.log(`drag -enter`);
    });
    li.addEventListener(`dragleave`, e => {
      console.log(`drag-leave`);
    });
    li.addEventListener(`dragover`, e => {
      console.log(`drag -over`);
    });
    li.addEventListener(`drop`, e => {
      e.preventDefault();
      console.log(`drop`);
      // e.target.item.append(e.target);
    });

    li.addEventListener(`dragend`, e => {
      console.log(`drag- end`);
    });
  }
});
