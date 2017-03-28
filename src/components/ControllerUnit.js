import React from 'react';
import './controllerunit.scss';

class ControllerUnit extends React.Component {

  render() {
    let controllerUnitClassName = 'controller-unit';
    // 图片居中
    //if() {
    //  controllerUnitClassName += ' is-center';
    //}
    //图片旋转
    //if() {
    //  controllerUnitClassName += ' is-inverse'
    //}
    return (
      <span className={controllerUnitClassName}></span>
    );
  }
}

ControllerUnit.displayName = 'ControllerUnit';
ControllerUnit.propTypes = {};
ControllerUnit.defaultProps = {};

export default ControllerUnit;
