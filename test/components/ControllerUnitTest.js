import React from 'react';
import { shallow } from 'enzyme';
import ControllerUnit from 'components\ControllerUnit.js';

describe('<ControllerUnit />', function () {

  let component;
  beforeEach(function () {
    component = shallow(<ControllerUnit />);
  });

  describe('when rendering the component', function () {

    it('should have a className of "controllerunit-component"', function () {
      expect(component.hasClass('controllerunit-component')).to.equal(true);
    });
  });
});
