import { INVERSE } from './const';

function action(index) {
  return { type: INVERSE, index };
}

module.exports = action;
