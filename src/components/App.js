 import React from 'react';
 import ReactDOM from 'react-dom';
//import YeomanImage from './YeomanImage';
import ControllerUnit from './ControllerUnit';
import ImgFigure from './ImgFigure';
import { getRangeRandom, get30DegRandom, imgsArrDatas } from '../sources/funs';
import 'normalize.css/normalize.css';
import './app.scss';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: {}
    }
  }

  init(size) {
    const {stageW, stageH, imgW, imgH} = size;

    const stage = {
      centerPos: {
        left: 0,
        top: 0
      },
      // 水平方向取值范围
      hPosRange: {
        leftSecX: [0, 0], // 左分区x取值
        rightSecX: [0, 0], // 右分区y取值
        y: [0, 0] // 左右y范围相同，故简写y
      },
      // 竖直方向取值范围
      vPosRange: {
        x: [0, 0], // x取值
        topY: [0, 0]  // y取值
      }
    };

    const halfStageW = Math.floor(stageW / 2);
    const halfStageH = Math.floor(stageH / 2);
    const halfImgW = Math.floor(imgW / 2);
    const halfImgH = Math.floor(imgH / 2);

    stage.centerPos = {
      left: halfStageW - halfImgW,
      top: halfStageH - halfImgH
    };

    stage.hPosRange.leftSecX[0] = -halfImgW;
    stage.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
    stage.hPosRange.rightSecX[0] = halfStageW + halfImgW;
    stage.hPosRange.rightSecX[1] = stageW - halfImgW;
    stage.hPosRange.y[0] = -halfImgH;
    stage.hPosRange.y[1] = stageH - halfImgH;

    stage.vPosRange.topY[0] = -halfImgH;
    stage.vPosRange.topY[1] = halfStageH - halfImgH * 3;
    stage.vPosRange.x[0] = halfStageW - imgW;
    stage.vPosRange.x[1] = halfStageW;

    return stage;
  }

  /**
	 * 翻转图片
	 * index 当前需要执行翻转的图片数组里的index值
	 */
  inverse(index) {
    this.props.actions.inverse(index);
  }

  /**
	 * 居中对应的index图片
	 * index 被居中的图片在图片数组里的index值
	 */
	 center(index) {
 			this.props.actions.arrange(index, this.props.imgs.imgsArr, this.state.stage);
 	 }

  //组件加载后，计算每张图片其可以放置的范围
  componentDidMount() {
    // 舞台大小
    const stageDOM = ReactDOM.findDOMNode(this.refs.stage),
          stageW = stageDOM.scrollWidth,// 舞台宽度
          stageH = stageDOM.scrollHeight;// 舞台高度
    // imgFigure组件的大小
    const imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
          imgW = imgFigureDOM.scrollWidth,// img组件宽度
          imgH = imgFigureDOM.scrollHeight;// img组件高度

    const stage = this.init({
      stageW,
      stageH,
      imgW,
      imgH
    });
    this.setState({stage});
    // 排列
    this.props.actions.arrange(0, this.props.imgs.imgsArr, stage);
  }

  render() {
    // 存放 image 和 controller
    let imgFigures = [],
        controllerUnits = [];
    // 遍历图片
    imgsArrDatas.map((value, index) => {
      // 插入imgFigures数组中
      imgFigures.push(
        <ImgFigure key={index}
          id={index}
          arrange={this.props.imgs.imgsArr[index]}
          data={value}
          ref={'imgFigure' + index}
          onInverse={index => this.inverse(index)}
          onCenter={index => this.center(index)}
        />
      );
      // 插入controllerUnits数组中
      controllerUnits.push(
        <ControllerUnit key={index}
          id={index}
          arrange={this.props.imgs.imgsArr[index]}
          onInverse={index => this.inverse(index)}
          onCenter={index => this.center(index)}
        />
      )
    });

    return (
      <section className='stage' ref='stage' >
        <div className='img-sec'>
          {imgFigures}
        </div>
        <nav className='controller-nav'>
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
