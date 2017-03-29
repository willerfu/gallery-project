/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { INVERSE, ARRANGE } from '../actions/const';
import { imgsArrDatas } from '../sources/funs'


let imgsArr = [];
for(let i = 0, j = imgsArrDatas.length; i < j; i++) {
  imgsArr[i] = {
    pos:{ left: 0, top: 0},
    rotate: 0,
    isInverse: false,
    isCenter: false
  }
}
// 初始化state
const initialState = { imgsArr: imgsArr };

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    // 排列 action
    case ARRANGE: {

      return Object.assign({}, state, {
        imgsArr: state.imgsArr.map((img, index) => {
          if (index === action.centerIndex) {
            return Object.assign({}, img, {
              pos: action.centerPos,
              rotate: 0, // 居中图片不需要旋转
              isInverse: false,
              isCenter: true
            });
          }
          return img;
        })
      })
    }
    // 翻转 action
    case INVERSE: {
      // Modify next state depending on the action and return it
      // return nextState;
      return Object.assign({}, state, {
        imgsArr: state.imgsArr.map((img, index) => {
          if (index === action.index) {
            return Object.assign({}, img, {
              isInverse: !img.isInverse,
            });
          }
          return img;
        })
      })
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
