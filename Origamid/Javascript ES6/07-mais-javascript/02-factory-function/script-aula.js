function createButton(text) {
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    text: text,
    element: element(),
  };
}
