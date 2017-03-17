import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils' // ES6
import App from './App';
import data from './data.js'

let props = {
	initialState: data,
};

it('renders without crashing', () => {
	const renderer = ReactTestUtils.createRenderer();
	renderer.render(<App {...props} />);
  const result = renderer.getRenderOutput();

	expect(result.type).toBe('div');
});

it('should render 2 messages', () => {
  let app = ReactTestUtils.renderIntoDocument(<App {...props} />);
  let messages = ReactTestUtils.scryRenderedDOMComponentsWithClass(
	  app,
	  'Message'
	);

 	expect(messages.length).toBe(2);
});
