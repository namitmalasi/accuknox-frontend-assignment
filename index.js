const sentences = [
  "He's not the sharpest knife in the drawer.",
  "The early bird catches the worm.",
  "Actions speak louder than words.",
  "You can't judge a book by its cover.",
];

function createGrid() {
  const gridContainer = document.getElementById("grid-container");

  sentences.forEach((sentence, index) => {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";

    const sentenceDiv = document.createElement("div");
    sentenceDiv.className = "sentence";
    sentenceDiv.textContent = sentence;
    sentenceDiv.id = "sentence" + index;

    gridItem.appendChild(
      createButton("Bold", () => toggleStyle(index, "fontWeight"))
    );
    gridItem.appendChild(
      createButton("Italic", () => toggleStyle(index, "fontStyle"))
    );
    gridItem.appendChild(
      createButton("Underline", () => toggleStyle(index, "textDecoration"))
    );
    gridItem.appendChild(
      createInput("number", "16", (event) =>
        changeFontSize(sentenceDiv, event.target.value)
      )
    );
    gridItem.appendChild(
      createInput("color", "#000000", (event) =>
        changeColor(sentenceDiv, event.target.value)
      )
    );

    gridContainer.appendChild(gridItem);
    gridContainer.appendChild(sentenceDiv);
  });
}

function createButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

function createInput(type, value, onChange) {
  const input = document.createElement("input");
  input.type = type;
  input.value = value;
  input.addEventListener("change", onChange);
  return input;
}

// Function to toggle bold, italic, and underline
function toggleStyle(sentenceId, styleProperty) {
  const sentence = document.getElementById("sentence" + sentenceId);
  switch (styleProperty) {
    case "fontWeight":
      sentence.style.fontWeight =
        sentence.style.fontWeight === "bold" ? "normal" : "bold";
      break;
    case "fontStyle":
      sentence.style.fontStyle =
        sentence.style.fontStyle === "italic" ? "normal" : "italic";
      break;
    case "textDecoration":
      sentence.style.textDecoration =
        sentence.style.textDecoration === "underline" ? "none" : "underline";
      break;
    default:
      break;
  }
}

function changeFontSize(element, size) {
  element.style.fontSize = size + "px";
}

function changeColor(element, color) {
  element.style.color = color;
}

createGrid();
