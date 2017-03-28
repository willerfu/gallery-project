import { INVERSE } from './const';

function action(text) {
  return { type: INVERSE, text };
}

module.exports = action;
