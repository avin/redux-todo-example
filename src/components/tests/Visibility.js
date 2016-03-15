const {describe, it} = global;

import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Visibility from '../Visibility.jsx';

describe('comonents.Visibility', () => {
    it('should show 3 visibilities', () => {

        const el = shallow(<Visibility visibility='' setVisibility={() => {}}/>);

        expect(el.find('a').length).to.be.equal(3);

        expect(el.find('a').at(0).text()).to.be.equal('ALL');
        expect(el.find('a').at(1).text()).to.be.equal('COMPLETED');
        expect(el.find('a').at(2).text()).to.be.equal('NOT_COMPLETED');
    });

    it('should highlight selected visibility', () => {

        const el = shallow(<Visibility visibility='COMPLETED' setVisibility={() => {}}/>);

        expect(el.find('a').at(0).props()).not.to.have.deep.property('style.fontWeight', 'bold');
        expect(el.find('a').at(1).props()).to.have.deep.property('style.fontWeight', 'bold');
        expect(el.find('a').at(2).props()).not.to.have.deep.property('style.fontWeight', 'bold');
    })
});