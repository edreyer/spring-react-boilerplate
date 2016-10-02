import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import {expect} from 'chai';

import Hello from '../../../../main/resources/public/js/components/Hello';

describe('Hello', () => {

    it('should say hello', () => {
        const component = renderIntoDocument(
            <Hello name="World"/>
        );

        const h1 = scryRenderedDOMComponentsWithTag(component, 'h1');
        expect(h1.length).to.equal(1);
        expect(h1[0].textContent).to.equal('Hello, World!');
    });

});
