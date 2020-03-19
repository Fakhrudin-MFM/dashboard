'use strict';

const dashboard = require('../index');
const __ = require('core/strings').unprefix('errors');
const Errors = require('../errors/web-errors');

module.exports = function (req, res) {
  const widget = dashboard.getWidget(req.params.id);
  if (widget) {
    try {
      widget.refresh(req, res);
    } catch (err) {
      res.status(500).send(err);
    }
  } else {
    res.status(404).send(__(Errors.NO_WIDGET));
  }
};
