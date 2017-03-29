import React from 'react';
import './imgfigure.scss';

class ImgFigure extends React.Component {

  render() {
    let imgFigureClassName = 'img-figure';
    // 如果旋转
    // imgFigureClassName += ' is-inverse';
    return (
      <figure className={imgFigureClassName}>
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
