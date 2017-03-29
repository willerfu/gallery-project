import React from 'react';
import './imgfigure.scss';

class ImgFigure extends React.Component {

  handleClick(event) {
    // 翻转
    this.props.onInverse(this.props.id);
    // 阻止默认事件
    event.preventDefault();


  }

  render() {
    // 样式位置
    let styleObj = {};
    // 如果props属性中指定了这张图片的位置，则使用
    console.log(this.props.arrange);
		if (this.props.arrange.pos) {
			styleObj = {
				left: this.props.arrange.pos.left + 'px',
				top: this.props.arrange.pos.top + 'px'
			};
		}
    // 如果图片的旋转角度有值且不为0，则添加旋转角度
		if (this.props.arrange.rotate) {
      let browserType = ['MzoTransform','msTransform','WebkitTransform','transform'];
      browserType.forEach(value => {
				styleObj[value] = 'rotate(' + this.props.arrange.rotate + 'deg)';
			});
		}
		// 如果图片居中，设置其z-index值11，防止其他图片遮盖
		if (this.props.arrange.isCenter) {
			styleObj['zIndex'] = 11;
		}

    let imgFigureClassName = 'img-figure';
    // 如果旋转 追加class 注意空格
    imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';
    return (
      <figure className={imgFigureClassName}
        style={styleObj}
        onClick={(e) => {
          this.handleClick(e);
      }}>
        <img src={this.props.data.imgUrl} alt={this.props.data.fileName} />
        <figcaption>
          <h2 className='img-title'>{this.props.data.title}</h2>
          <div className='img-back'>
            <p>{this.props.data.desc}</p>
          </div>
        </figcaption>
      </figure>
    );
  }
}

ImgFigure.displayName = 'ImgFigure';
ImgFigure.propTypes = {};
ImgFigure.defaultProps = {};

export default ImgFigure;
