import React from 'react';
import './controllerunit.scss';

class ControllerUnit extends React.Component {

  handleClick(event) {
    // 判断点击的图片是否居中显示
		if (this.props.arrange.isCenter) {
      // 翻转
      this.props.onInverse(this.props.id);
    } else {
       // 居中
      this.props.onCenter(this.props.id);
    }
    // 阻止默认事件
    event.preventDefault();
    event.stopPropagation();
  }

  render() {
    let controllerUnitClassName = 'controller-unit';
    // 图片居中
    if(this.props.arrange.isCenter) {
      controllerUnitClassName += ' is-center';
    }
    //图片旋转
    if(this.props.arrange.isInverse) {
      controllerUnitClassName += ' icon-inverse'
    }
    return (
      <span className={controllerUnitClassName}
        onClick={(e) => {
          this.handleClick(e);
      }}></span>
    );
  }
}

ControllerUnit.displayName = 'ControllerUnit';
ControllerUnit.propTypes = {};
ControllerUnit.defaultProps = {};

export default ControllerUnit;
