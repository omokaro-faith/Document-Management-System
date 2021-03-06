import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import App from '../../../components/App.jsx';
import Footer from '../../../components/Footer';

describe(' Test for App Component', () => {
  it('renders the root component', () => {
    shallow(<App />);
  });
  it('renders Footer', () => {
    const wrapper = shallow(<App />);
    const footer = <Footer />;
    expect(wrapper.contains(footer)).toEqual(1);
  });
});
