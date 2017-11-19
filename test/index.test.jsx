import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Test from '../src/index';

test('should be a component', () => {
  expect(<Test images={['test']} height={200} />).toBeTruthy();
});

describe('initial state', () => {
  test('isModalOpen should be false', () => {
    const c = new Test({});
    expect(c.state.isModalOpen).toEqual(false);
  });

  test('photoIndex should be 0', () => {
    const c = new Test({});
    expect(c.state.photoIndex).toEqual(0);
  });
});

describe('#toggleModal', () => {
  test('should toggle state.isModalOpen', () => {
    const s = shallow(<Test images={['test']} height={200} />);
    s.instance().toggleModal();
    expect(s.instance().state.isModalOpen).toBe(true);

    s.instance().toggleModal();
    expect(s.instance().state.isModalOpen).toBe(false);
  });
});

describe('Rendered view', () => {
  test('should have the image to be shown', () => {
    const s = shallow(<Test images={['test']} height={200} />);

    // test image exists
    expect(s.find('.img').exists()).toBe(true);

    // test background image is shown
    const style = s.find('.img').prop('style');
    expect(style.backgroundImage).toEqual('url(test)');
  });

  test('should display all the other images', () => {
    const s = shallow(<Test images={['test', 'test2', 'test3']} height={200} />);

    // test images exist
    expect(s.find('.relatedImg').length).toBe(3);
  });

  test('on click on the main .img, should toggle modal', () => {
    const s = shallow(<Test images={['test', 'test2', 'test3']} height={200} />);

    // verify modal is closed
    expect(s.state().isModalOpen).toBe(false);


    // click the image
    s.find('.img').simulate('click');

    // verify modal is opened
    expect(s.state().isModalOpen).toBe(true);
  });


  test('on click on a .relatedImg, should toggle modal', () => {
    const s = shallow(<Test images={['test', 'test2', 'test3']} height={200} />);

    // verify modal is closed
    expect(s.state().isModalOpen).toBe(false);


    // click the image
    s.find('.relatedImg').at(0).simulate('click');

    // verify modal is opened
    expect(s.state().isModalOpen).toBe(true);
  });

  test('should match snapshot when isModalOpen is false', () => {
    const s = shallow(<Test images={['test', 'test2']} height={200} />);
    expect(toJSON(s)).toMatchSnapshot();
  });

  test('should match snapshot when isModalOpen is false', () => {
    const s = shallow(<Test images={['test', 'test2']} height={200} />);
    s.instance().toggleModal();
    expect(toJSON(s)).toMatchSnapshot();
  });
});
