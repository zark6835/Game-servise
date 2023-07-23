const addHeaderOpenClass = (event) => {
  const clickedElement = event.target;
  const vector = clickedElement.parentNode
  const list = clickedElement.parentNode.parentNode.querySelector(".openClass");
  
  // перевіряє чи є ще класи open на сторінці якщо так то проходить по ним forEach та видаляє їх
  if (!list.classList.contains("open")) {
    const openElements = document.querySelectorAll(".open");
    openElements.forEach((element) => element.classList.remove("open"))
  }
  
//перевіряє чи с класс open у clickedElement якщо ні то додає цей класс якщо є то видаляє
  if (!list.classList.contains("open")) {
    clickedElement.classList.add("open");
    vector.classList.add("open");
    list.classList.add("open");
  } else {
    list.classList.remove("open");
    clickedElement.classList.remove("open");
    vector.classList.remove("open");
  }   
};

export { addHeaderOpenClass };
