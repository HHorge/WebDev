import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
	test('loads without error', () => {
		let element = <App />;

		expect(element).toBeTruthy();
	});
});

describe('App', () => {
	test('render matches snapshot', () => {
		const component = renderer.create(<App />);
		const tree = component.toJSON();

		expect(tree).toMatchSnapshot();
	});
});