const codes = require('../../../errors/backend');

module.exports = {
  [codes.LAYOUT_NOT_SET]: 'Не установлен макет dashboard',
  [codes.NO_LAYOUT]: 'Макет %id не найден',
  [codes.NO_WIDGET]: 'Виджет %id не найден',
  [codes.WIDGET_NOT_BASE]: 'Виджет не наследует базовый класс: %file',
  [codes.WIDGET_NOT_FUNC]: 'Не определен класс виджета: %file'
};
