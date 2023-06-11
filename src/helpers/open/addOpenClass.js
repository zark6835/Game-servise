const addHeaderOpenClass = (event) => {
  const clickedElement = event.target;
  const list = clickedElement.parentNode.parentNode.querySelector(".openClass");

  if (!list.classList.contains("open")) {
    clickedElement.classList.add("open");
    list.classList.add("open");
  } else {
    list.classList.remove("open");
    clickedElement.classList.remove("open");
  }
};

export { addHeaderOpenClass };
