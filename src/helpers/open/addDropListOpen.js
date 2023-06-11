
const addDropListOpen = (event) => {
    const clickedElement = event.target;
    const list = clickedElement.parentNode.parentNode.parentNode.querySelector(".openClass");
  
    if (!list.classList.contains("open")) {
      list.classList.add("open");
    } else {
      list.classList.remove("open");
    }
  };
  
  export { addDropListOpen };