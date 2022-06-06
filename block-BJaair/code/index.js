function myFunction() {
  let container = document.querySelector(`.container`);
  let ul = document.querySelector(`.root`);
  let form = document.querySelector(`form`);

  let cardsData = JSON.parse(localStorage.getItem(`cards`)) || [];
  // let cardsData = [];

  form.addEventListener(`submit`, event => {
    event.preventDefault();
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;

    if (title !== `` && category !== ``) {
      let data = {};
      data.title = title;
      data.category = category;
      cardsData.push(data);
      localStorage.setItem(`cards`, JSON.stringify(cardsData));
      createUi(cardsData, ul);
    } else {
      alert("Invalid input");
    }
    event.target.elements.title.value = ``;
    event.target.elements.category.value = ``;
  });

  // handleEdit

  function handleEdit(event, info, index, label) {
    let elm = event.target; // p

    let input = document.createElement(`input`);
    input.classList.add(`input`);
    input.value = info;

    input.addEventListener(`keyup`, e => {
      if (e.keyCode === 13) {
        let updatedValue = e.target.value;
        cardsData[index][label] = updatedValue;
        localStorage.setItem(`cards`, JSON.stringify(cardsData));
        createUi();
      }
    });

    input.addEventListener("blur", e => {
      let updatedValue = e.target.value;
      cardsData[index][label] = updatedValue;
      localStorage.setItem(`cards`, JSON.stringify(cardsData));
      createUi();
    });

    let parent = event.target.parentElement;
    parent.replaceChild(input, elm);
  }

  function createUi(data = cardsData, root = ul) {
    root.innerHTML = ``;
    let fragment = new DocumentFragment();
    data.forEach((elm, index) => {
      console.log(data, elm);
      let li = document.createElement(`li`);
      let wrapper = document.createElement(`div`);
      wrapper.classList.add(`wrapper`);

      let p = document.createElement(`p`);
      p.innerText = elm.category;

      p.addEventListener(`dblclick`, event =>
        handleEdit(event, elm.category, index, `category`)
      );
      let span = document.createElement(`span`);
      span.innerText = `❌`;

      let h2 = document.createElement(`h2`);
      h2.innerText = elm.title;

      h2.addEventListener(`dblclick`, event =>
        handleEdit(event, elm.title, index, `title`)
      );

      wrapper.append(p, span);

      span.addEventListener(`click`, e => {
        cardsData.splice(index, 1);
        createUi();
        localStorage.setItem(`cards`, JSON.stringify(cardsData));
      });

      li.append(wrapper, h2);
      fragment.appendChild(li);
    });
    root.append(fragment);
  }

  createUi(cardsData, ul);
}

myFunction();
