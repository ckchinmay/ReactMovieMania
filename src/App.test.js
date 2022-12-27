import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from './App';
it('renders without crashing', () => {
    TestRenderer.create(<App />);
});

//test block
test("increments counter", () => {
    // render the component on virtual dom
    render(<App />);
    //assert the expected result
    // expect(counter).toHaveTextContent("1");
});
