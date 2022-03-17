var dayjs = require('dayjs');

export const createClickableElement = (array, targetElement, funcAction) => {
  array.forEach(function (item) {
    var element = document.createElement('div');
    element.innerHTML = item;
    targetElement.appendChild(element);
    element.addEventListener('click', funcAction);
  });
};

export const attachNavTitle = (menu, navtitle) => {
  const navEl = menu.previousElementSibling.nextElementSibling;
  const title = document.createElement('h2');
  title.innerHTML = navtitle;
  navEl.prepend(title);
};

export const readableDate = date => {
  return dayjs(date).format('dddd, MMMM D');
};
