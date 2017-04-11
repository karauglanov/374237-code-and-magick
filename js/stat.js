// stats.js
'use strict';

window.renderStatistics = function (ctx, names, times) {
  // Рисуем тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';// Задаём чёрный цвет
  ctx.strokeRect(110, 20, 420, 270);// Вывод контура чётнрого цвета
  ctx.fillRect(110, 20, 420, 270);// Вывод тени чёрного цыета

  // Рисуем облако
  ctx.fillStyle = 'White';// Задаём белый цвет
  ctx.strokeRect(100, 10, 420, 270);// Вывод контура чётнрого цвета
  ctx.fillRect(100, 10, 420, 270);// Вывод облака белого цвета

  ctx.fillStyle = '#000'; // Задаём чёрный цвет
  ctx.font = '16px PT Mono';// Задаём тип шрифта

  // Вывод надписи
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  // Организация цикла по поиску максимального времени
  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;// Максимальное время
    }
  }

  var histogramHeight = 150;              // Высота гистограммы в px;
  var step = histogramHeight / (max - 0); // Расчёт шага для построения гистограмм в px;

  var barHWidth = 40; // Ширина гистограммы в px
  var indent = 50;    // Шаг между столбцами в px
  var initialX = 150; // Начальная координата Х в px
  var initialY = 250; // Начальная координата Y в px

  ctx.textBaseline = 'top'; // положение надписи от левого верхнего угла
  for (i = 0; i < times.length; i++) {

 // Задаём цвет гистограммы по условию
    if (names[i] === 'Вы') {
      ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var k = 'rgba(0, 0, 255, ' + Math.random().toFixed(1) + ')'; // Получение прозрачности с помощью случайного числа
      ctx.strokeStyle = k; // 'rgba(0, 0, 255, n)'
      ctx.fillStyle = k; // 'rgba(0, 0, 255, n)'
    }

   // Отрисовка гистограмм
    ctx.beginPath();
    ctx.moveTo(initialX, initialY);
    ctx.lineTo(initialX + barHWidth, initialY);
    ctx.lineTo(initialX + barHWidth, initialY - (times[i] * step));
    ctx.lineTo(initialX, initialY - (times[i] * step));
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = 'Black';// Задаём цвет текста
    ctx.fillText(names[i], initialX, initialY + 5);// Вывод имён игроков
    ctx.fillText(times[i].toFixed(0), initialX, initialY - times[i] * step - 25);// Вывод времени каждого игрока
    initialX = initialX + barHWidth + indent;// Сдвиг координат на ширину гистограммы и расстояние между гистограммами
  }
};
