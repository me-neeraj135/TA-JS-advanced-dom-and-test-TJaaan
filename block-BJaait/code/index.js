var btn = document.querySelector(".add");
var remove = document.querySelector(".draggable");

function dragStart(e) {
  this.style.opacity = "0.4";
  // console.log(`start`);
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function dragEnter(e) {
  // console.log(`enter`);

  this.classList.add("over");
}

function dragLeave(e) {
  // console.log(`leave`);

  e.stopPropagation();
  this.classList.remove("over");
}

function dragOver(e) {
  // console.log(`over`);

  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  return false;
}

function dragDrop(e) {
  // console.log(this);
  if (dragSrcEl != this) {
    // console.log(dragSrcEl);
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }
  return false;
}

function dragEnd(e) {
  var listItems = document.querySelectorAll(".draggable");
  [].forEach.call(listItems, function (item) {
    item.classList.remove("over");
  });
  this.style.opacity = "1";
}

function addEventsDragAndDrop(el) {
  el.addEventListener("dragstart", dragStart, false);
  el.addEventListener("dragenter", dragEnter, false);
  el.addEventListener("dragover", dragOver, false);
  el.addEventListener("dragleave", dragLeave, false);
  el.addEventListener("drop", dragDrop, false);
  el.addEventListener("dragend", dragEnd, false);
}

var listItems = document.querySelectorAll(".draggable");
[].forEach.call(listItems, function (item) {
  addEventsDragAndDrop(item);
});

function addNewItem() {
  var newItem = document.querySelector(".input").value;
  if (newItem != "") {
    document.querySelector(".input").value = "";
    var li = document.createElement("li");
    var attr = document.createAttribute("draggable");
    var ul = document.querySelector("ul");
    li.className = "draggable";
    attr.value = "true";
    li.setAttributeNode(attr);
    li.appendChild(document.createTextNode(newItem));
    ul.appendChild(li);
    addEventsDragAndDrop(li);
  }
}

btn.addEventListener("click", addNewItem);
