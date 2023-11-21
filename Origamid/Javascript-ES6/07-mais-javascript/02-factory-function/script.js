function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach((element) => {
      element.style.display = "none";
    });
    return $$(selectedElements);
  }

  function show() {
    elements.forEach((element) => {
      element.style.display = "initial";
    });
    return $$(selectedElements);
  }

  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    return $$(selectedElements);
  }

  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
  }

  function removeClass(className) {
    elements.forEach((element) => {
      element.classList.remove(className);
    });
    return this;
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  };
}

const btns = $$("button");

console.log(btns);

function handleClick(event) {
  console.log(event.target);
  btns.addClass("active");
}

btns.on("click", handleClick);
