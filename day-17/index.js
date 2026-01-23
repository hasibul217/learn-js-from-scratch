// DOM tree structure

// Node vs Element

// Querying & traversal

// Event bubbling & delegation

// Mutation vs reflow

// Accessibility hooks (tabindex, focus)

let titleElem = document.getElementById("heading");

console.log(titleElem);

let infoElems = document.getElementsByClassName("info");

[...infoElems].forEach((elem) => {
  console.log(elem);
});
