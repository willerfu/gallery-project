import React from 'react';
import { shallow } from 'enzyme';
import ImgFigure from 'components\ImgFigure.js';

describe('<ImgFigure />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ImgFigure />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "imgfigure-component"', function () {
      expect(component.hasClass('imgfigure-component')).to.equal(true);
    });
  });
});
