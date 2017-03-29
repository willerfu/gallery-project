import React from 'react';
//import YeomanImage from './YeomanImage';
import ControllerUnit from './ControllerUnit'
import ImgFigure from './ImgFigure'
import 'normalize.css/normalize.css'
import './app.scss'

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

  // 点击添加事件
  handleClick(e) {
    let text = '哈哈哈哈';
    this.props.actions.inverse(text);
    //console.log("text内容：" + this.props.imgs.text);
  }

  render() {
    // 存放 image 和 controller
    let imgFigures = [],
        controllerUnits = [];

    // 遍历图片
    imgsArrDatas.map((value, index) => {
      // 插入imgFigures数组中
      imgFigures.push(
        <ImgFigure key={index} data={value} />
      );
      // 插入controllerUnits数组中
      controllerUnits.push(
        <ControllerUnit key={index} />
      )
    });

    return (
      <section className='stage' ref='stage' >
        <button onClick={(e) => {
            this.handleClick(e);
            e.preventDefault();
        }}>点击我</button>
        <span>{this.props.imgs.text}</span>
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
