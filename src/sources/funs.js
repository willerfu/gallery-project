// 组件中需要调用的一些功能函数

//获取区间内的一个随机数
const getRangeRandom = (low, high) =>
  Math.floor(Math.random() * (high - low) + low);

// 获取 0~30° 之间的一个任意正负值
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

export { getRangeRandom, get30DegRandom, imgsArrDatas };
