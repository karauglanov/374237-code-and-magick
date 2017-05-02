// setup.js
'use strict'; //

// Константа содержащая цвет мантии
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
// Константа содержащая цвет глаз
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
// Константа содержащая цвета файербола
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Функция возвращает значения константы (массива) по генератору случайного числа
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Находим блок setup-open в document и берём его содержимое
var setupOpen = document.querySelector('.setup-open');
// Находим блок setup в document и берём его содержимое
var setup = document.querySelector('.setup');
// Находим блок setup-close в setup и берём его содержимое
var setupClose = setup.querySelector('.setup-close');
// Находим блок setup-user-name в setup и берём его содержимое
var setupUserName = setup.querySelector('.setup-user-name');
// Находим блок wizard-coat в setup и берём его содержимое
var wizardCoat = setup.querySelector('.wizard-coat');
// Находим блок wizard-eyes в setup и берём его содержимое
var wizardEyes = setup.querySelector('.wizard-eyes');
// Находим блок setup-fireball-wrap в setup и берём его содержимое
var wizardFireball = setup.querySelector('.setup-fireball-wrap');

// Обработка нажатия клавиши ESC и закрытие окна setup
var onKeyDown = function (evt) {
  if (evt.keyCode === 27) {  // Нажата клавиша ESC
    closePopup(); // Вызов функции closePopup
  }
};

// Открытие окна setup
var openPopup = function () {
  setup.classList.remove('hidden'); // Показываем блок setup, отключаем невидимость, удаляем class 'hidden'
  document.addEventListener('keydown', onKeyDown); // Запуск обработчика нажатия клавиши ESC
};

// Закрытие окна setup
var closePopup = function () {
  setup.classList.add('hidden'); // Скрываем блок setup, включаем невидимость, добавляем class 'hidden'
  document.removeEventListener('keydown', onKeyDown); // Остановка обработчика нажатия клавиши ESC
};

// Обрабатываем нажатие левой клавиши мыши на блоке setupOpen
setupOpen.addEventListener('click', function() {
  openPopup(); // Открытие окна setup
});

// Обрабатываем нажатие клавиши ENTER если блок setupOpen находиться в фокусе
setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) { // Нажата клавиша ENTER
    openPopup(); // Открытие окна setup
  }
});

// Обрабатываем нажатие левой клавиши мыши на блоке setupClose
setupClose.addEventListener('click', function() {
  closePopup(); // Закрытие окна setup
});

// Обрабатываем нажатие клавиши ENTER если блок setupClose находиться в фокусе
setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) { // Нажата клавиша ENTER
    closePopup(); // Закрытие окна setup
  }
});

// Обработка нажатия клавиши ESC на блоке ввода имени setupUserName
setupUserName.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) { // Нажата клавиша ESC
    evt.stopPropagation(); // Отменяем на блоке ввода имени setupUserName функцию closePopup по нажатию на клавишу ESC
  }
});

// Обрабатываем нажатие левой клавиши мыши на блоке wizardCoat
wizardCoat.addEventListener('click', function() {
  wizardCoat.style.fill = randomItem(WIZARD_COATCOLOR); // Присвоение цвета мантии с помощью функции случайного числа
});

// Обрабатываем нажатие левой клавиши мыши на блоке wizardEyes
wizardEyes.addEventListener('click', function() {
  wizardEyes.style.fill = randomItem(WIZARD_EYESCOLOR); // Присвоение цвета глаз с помощью функции случайного числа
});

// Обрабатываем нажатие левой клавиши мыши на блоке wizardFireball
wizardFireball.addEventListener('click', function() {
  wizardFireball.style.background = randomItem(WIZARD_FIREBALL); // Присвоение цвета файербола с помощью функции случайного числа
});
