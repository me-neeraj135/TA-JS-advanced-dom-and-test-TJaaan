let limit = 0;
function moreQuotes() {
  for (let i = 0; i < 3; i++) {
    let box = document.createElement(`div`);
    let title = document.createElement(`h2`);
    let author = document.createElement(`p`);
    box.classList.add(`container`);
    author.classList.add(`author`);
    title.className = `title`;
    title.innerText = quotes[limit].quoteText;
    author.innerText = quotes[limit].quoteAuthor;
    box.append(title, author);
    // document.documentElement.insertAdjacentElement(`beforeend`, box);
    document.body.append(box);
    limit++;
  }
}

moreQuotes();

document.addEventListener(`scroll`, function () {
  let { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight && limit < quotes.length) {
    moreQuotes();
  }
});

window.addEventListener(`DOMContentLoaded`, () => {
  alert(`content is loaded`);
  // moreQuotes();
});
