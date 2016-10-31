// объявление переменной
// поиск по всему DOM-дереву, возврат первого значения
var menu_button = document.querySelector(".page-header__menu--close");
var menu = document.querySelector(".page-header__menu--open");

// отлавливает событие
menu_button.addEventListener("click", function(event) {
  if (menu.classList.contains("page-header__menu--open-show")) {
      // отмена действия по умолчанию
      event.preventDefault();
      // вывод в консоль
      console.log("клик таки");
      // без точки, Карл, ибо этот метод работает только с классами
      menu.classList.remove("page-header__menu--open-show");
  }
  else {
      event.preventDefault();
      menu.classList.add("page-header__menu--open-show");
  }
});
