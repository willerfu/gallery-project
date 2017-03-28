/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { INVERSE } from '../actions/const';
const initialState = {
  text: '你好吗',
  isInverse: false
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    case INVERSE: {
      // Modify next state depending on the action and return it
      // return nextState;
      return Object.assign({}, state, {
        text: action.text,
        isInverse: !state.isInverse
      });
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
