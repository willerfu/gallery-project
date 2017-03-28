 import React from 'react';
 import ReactDOM from 'react-dom';
//import YeomanImage from './YeomanImage';
import ControllerUnit from './ControllerUnit';
import ImgFigure from './ImgFigure';
import 'normalize.css/normalize.css';
import './app.scss';

/**
 * 获取区间内的一个随机数
 */
const getRangeRandom = (low, high) =>
  Math.floor(Math.random() * (high - low) + low);

  /*
   * 获取 0~30° 之间的一个任意正负值
   */
const get30DegRandom = () =>
  ((Math.random() > 0.5 ? '' : '-') + Math.floor(Math.random() * 30));

// 获取图片json数据
let imgsJsonDatas = require('../data/imageDatas.json');

// 暴露图片数据
let imgsArrDatas = ((imgsJsonDatas) => {
	for (let i = 0, j = imgsJsonDatas.length; i < j; i++) {
		// 单张图片数据
		let singleImgsData = imgsJsonDatas[i];
		// 添加新属性 imageUrl 存放图片路径信息
		singleImgsData.imgUrl = require('../images/' + singleImgsData.fileName);
		// 更新图片数据
		imgsJsonDatas[i] = singleImgsData;
	}
  // 返回更新后的图片数据
  return imgsJsonDatas;
})(imgsJsonDatas)

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    // 位置排布点(先设置0，0)
  	this.Constant = {
  		centerPos: {
  			left: 0,
  			right: 0
  		},
  		// 水平方向取值范围
  		hPosRange: {
  			leftSecX: [0,0], // 左分区x取值
  			rightSecX: [0,0], // 右分区y取值
  			y: [0,0] // 左右y范围相同，故简写y
  		},
  		// 竖直方向取值范围
  		vPosRange: {
  			x: [0,0], // x取值
  			topY: [0,0] // y取值
  		}
  	}
  }


  //组件加载后，计算每张图片其可以放置的范围
  componentDidMount() {
    // 舞台大小
    let stageDOM = ReactDOM.findDOMNode(this.refs.stage),
        stageW = stageDOM.scrollWidth, // 舞台宽度
        stageH = stageDOM.scrollHeight, // 舞台高度
        halfStageW = Math.floor(stageW / 2),
        halfStageH = Math.floor(stageH / 2);

    // imgFigure组件的大小
		let ImgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0), // 相同大小，取一个即可
  			imgW = ImgFigureDOM.scrollWidth, // img组件宽度
  			imgH = ImgFigureDOM.scrollHeight, // img组件高度
  			halfImgW = Math.floor(imgW / 2),
  			halfImgH = Math.floor(imgH / 2);

    // 计算中心图片位置
		this.Constant.centerPos = {
			left: halfStageW - halfImgW,
			top: halfStageH - halfImgH
		};

    // 水平左选区范围X
    this.Constant.hPosRange.leftSecX[0] = -halfImgW;
		this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW * 3;
		// 水平右选区范围X
		this.Constant.hPosRange.rightSecX[0] = halfStageW + halfImgW;
		this.Constant.hPosRange.rightSecX[1] = stageW - halfImgW;

		// 水平左右选区Y
		this.Constant.hPosRange.y[0] = -halfImgH;
		this.Constant.hPosRange.y[1] = stageH - halfImgH;

		// 垂直选区X
		this.Constant.vPosRange.x[0] = halfStageW - imgW;
		this.Constant.vPosRange.x[1] = halfStageW;
		// 垂直选区Y
		this.Constant.vPosRange.topY[0] = -halfImgH;
		this.Constant.vPosRange.topY[1] = halfStageH - halfImgH * 3;

    // 执行排布 默认第一张图片
		//this.rearrange(0);
		// 调用 arrange action
  }



  render() {
    // 存放 image 和 controller
    let imgFigures = [],
        controllerUnits = [];

    // 遍历图片
    imgsArrDatas.map((value, index) => {
      // 插入imgFigures数组中
      imgFigures.push(
        <ImgFigure key={index} data={value} ref={'imgFigure' + index} />
      );
      // 插入controllerUnits数组中
      controllerUnits.push(
        <ControllerUnit key={index} />
      )
    });

    return (
      <section className='stage' ref='stage' >
        <section className='img-sec'>
          {imgFigures}
        </section>
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
