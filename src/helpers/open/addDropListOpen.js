
const addDropListOpen = (event) => {
    const clickedElement = event.target.parentNode.parentNode.parentNode;

    const button = clickedElement.querySelector(".dropDownList__card");
    const name = clickedElement.querySelector(".dropDownList__card-name")
    const list = clickedElement.querySelector(".openClass");


    if (!list.classList.contains("open")) {
      list.classList.add("open");
      button.classList.add("open");
      name.classList.add("open");
    } else {
      list.classList.remove("open");
      button.classList.remove("open");
      name.classList.remove("open");
    }
  };
  
  export { addDropListOpen };