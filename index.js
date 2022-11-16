'use strict'
const mongoose = require('mongoose')

mongoose.Schema.prototype.extend = function (definition, options) {
  const clone = this.clone()
  clone.add(definition)
  for (const k in options) {
    clone.options[k] = options[k]
  }
  return clone
}