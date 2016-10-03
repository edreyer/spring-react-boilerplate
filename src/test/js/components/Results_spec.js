import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import {expect} from 'chai';
//import {scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';
import {List, Map} from 'immutable';

import {Results} from '../../../main/resources/public/js/components/Results';

describe('Results', () => {

    it('renders entries with vote counts or zero', () => {
        const pair = List.of('Trainspotting', '28 Days Later');
        const tally = Map({'Trainspotting': 5});

        const wrapper = mount(<Results pair={pair} tally={tally} />);
        const entries = wrapper.find('.entry');
        const [train, days] = entries.map(e => e.text());

        expect(entries.length).to.equal(2);
        expect(train).to.contain('Trainspotting');
        expect(train).to.contain('5');
        expect(days).to.contain('28 Days Later');
        expect(days).to.contain('0');
    });

    it('invokes the next callback when next button is clicked', () => {
        let nextInvoked = false;
        const next = () => nextInvoked = true;

        const pair = List.of('Trainspotting', '28 Days Later');
        const wrapper = mount(<Results pair={pair}
                                       tally={Map()}
                                       next={next}/>);
        wrapper.ref("next").simulate('click');

        expect(nextInvoked).to.equal(true);
    });

    it('renders the winner when there is one', () => {
        const wrapper = mount(
            <Results winner="Trainspotting"
                     pair={["Trainspotting", "28 Days Later"]}
                     tally={Map()} />
        );
        const winner = wrapper.ref('winner');
        expect(winner).to.be.ok;
        expect(winner.text()).to.contain('Trainspotting');
    });

});
