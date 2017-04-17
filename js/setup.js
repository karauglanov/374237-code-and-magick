// setup.js
'use strict';

// Константа содержащая имена
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
// Константа содержащая фамилии
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
// Константа содержащая цвет мантии
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
// Константа содержащая цвет глаз
var WIZARD_EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');// Находим блок .setup
userDialog.classList.remove('hidden');// Показываем блок, отключаем невидимость class 'hidden'

// Находим блок .setup-similar-list в блоке .setup, а не во всём документе
var similarListElement = userDialog.querySelector('.setup-similar-list');

// Находим блок #similar-wizard-template и берём его содержимое
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

// Функция возвращает значения константы (массива) по генератору случайного числа
function randomItem (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Функция создания мага со случайными параметрами
function generateRandomWizard() {
    var wizard =  {
      name: randomItem(WIZARD_NAMES) + ' ' + randomItem(WIZARD_SURNAME), // Присвоение имени и фамилии с помощью функции случайного числа
      coatColor: randomItem(WIZARD_COATCOLOR), // Присвоение цвета мантии с помощью функции случайного числа
      eyesColor: randomItem(WIZARD_EYESCOLOR) // Присвоение ывета глаз с помощью функции случайного числа
    };
  return wizard;
}

// Функция позволяющая создать нужного нам волшебника с теми параметрами которые мы ей передаём
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);// Клонируем волшебника с теми параметрами которые были в шаблоне #similar-wizard-template
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;// Заменяем шаблонное имя на имя переданное в переменной wizards
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;// Заменяем шаблонный цвет мантии на цвет переданный в переменной wizards
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;// Заменяем шаблонный цвет глаз на цвет переданное в переменной wizards
  return wizardElement;// Возвращаем из функции значение переменной wizardElement
};

var fragment = document.createDocumentFragment();// Создаём переменную fragment методом DocumentFragment для того что бы можно было сразу вывести всех магов, а не по одному

for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard(generateRandomWizard()));// Добавляем волшебников (детей) в элемент fragment
}

similarListElement.appendChild(fragment);// Передаём данные о волшебниках (детях) в блок .setup-similar-list');};
userDialog.querySelector('.setup-similar').classList.remove('hidden');// Показываем блок, отключаем невидимость class 'hidden'


