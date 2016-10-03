import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import {expect} from 'chai';
import {scryRenderedDOMComponentsWithTag} from 'react-addons-test-utils';
import {List} from 'immutable';

import {Voting} from '../../../main/resources/public/js/components/Voting';
import Winner from '../../../main/resources/public/js/components/Winner';

describe('Voting', () => {

    it('renders a pair of buttons', () => {
        const wrapper = mount(<Voting pair={["Trainspotting", "28 Days Later"]} />);

        const buttons = wrapper.find('button');
        expect(buttons.length).to.equal(2);
        expect(buttons.at(0).text()).to.equal('Trainspotting');
        expect(buttons.at(1).text()).to.equal('28 Days Later');
        expect(buttons.at(0)).to.not.have.attr('disabled');
        expect(buttons.at(1)).to.not.have.attr('disabled');
    });

    it('invokes callback when a button is clicked', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;
        const wrapper = mount(<Voting vote={vote} pair={["Trainspotting", "28 Days Later"]} />);

        const buttons = wrapper.find('button');
        buttons.at(0).simulate('click');
        expect(votedWith).to.equal('Trainspotting');
    });

    it('disables buttons when user has voted', () => {
        const wrapper = mount(<Voting hasVoted="Trainspotting" pair={["Trainspotting", "28 Days Later"]} />);

        const buttons = wrapper.find('button');
        expect(buttons.length).to.equal(2);
        expect(buttons.at(0)).to.have.attr('disabled');
        expect(buttons.at(1)).to.have.attr('disabled');
    });

    it('adds label to the voted entry', () => {
        const wrapper = mount(<Voting pair={["Trainspotting", "28 Days Later"]}
                                      hasVoted="Trainspotting" />);

        const buttons = wrapper.find('button');
        expect(buttons.at(0).text()).to.contain('Voted');
    });

    it('renders just the winner when there is one', () => {
        const wrapper = mount(
            <Voting winner="Trainspotting" />
        );
        const buttons = wrapper.find('button');
        expect(buttons.length).to.equal(0);

        const winner = wrapper.find(Winner);
        expect(winner).to.be.ok;
        expect(winner.text()).to.contain('Trainspotting');
    });

    it('renders as a pure component', () => {
        const pair = ['Trainspotting', '28 Days Later'];
        const container = document.createElement('div');
        let component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );

        let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('Trainspotting');

        pair[0] = 'Sunshine';
        component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );
        firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('Trainspotting');
    });

    it('does update DOM when prop changes', () => {
        const pair = List.of('Trainspotting', '28 Days Later');
        const container = document.createElement('div');
        let component = ReactDOM.render(
            <Voting pair={pair} />,
            container
        );

        let firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('Trainspotting');

        const newPair = pair.set(0, 'Sunshine');
        component = ReactDOM.render(
            <Voting pair={newPair} />,
            container
        );
        firstButton = scryRenderedDOMComponentsWithTag(component, 'button')[0];
        expect(firstButton.textContent).to.equal('Sunshine');
    });

});
