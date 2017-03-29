import { ARRANGE } from './const';

function action(centerIndex,centerPos) {
  return { type: ARRANGE, centerIndex , centerPos };
}

module.exports = action;
