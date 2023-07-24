const addHeaderOpenClass = (event) => {
  const clickedElement = event.target;
  const vector = clickedElement.parentNode
  const list = clickedElement.parentNode.parentNode.querySelector(".openClass");
  
  // перевіряє чи є ще класи open на сторінці якщо так то проходить по ним forEach та видаляє їх
  if (!list.classList.contains("open-header")) {
    const openElements = document.querySelectorAll(".open-header");
    openElements.forEach((element) => element.classList.remove("open-header"))
  }
  
//перевіряє чи с класс open у clickedElement якщо ні то додає цей класс якщо є то видаляє
  if (!list.classList.contains("open-header")) {
    clickedElement.classList.add("open-header");
    vector.classList.add("open-header");
    list.classList.add("open-header");
  } else {
    list.classList.remove("open-header");
    clickedElement.classList.remove("open-header");
    vector.classList.remove("open-header");
  }   
};

export { addHeaderOpenClass };
