import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';

describe('App', () =>{
  it ('should render', () => {
    const AppTest = shallow(<App />);

    expect(AppTest).not.toEqual(undefined);
  })
});