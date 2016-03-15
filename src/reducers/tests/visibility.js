const {describe, it} = global;

import {expect} from 'chai';
import reducer from '../visibility';

describe('reducers.visibility', () => {
    let testText = 'test_text';

    it('возвращает state по умолчанию', () => {
        expect(
            reducer(undefined, {})
        ).to.be.eql('ALL');
    });

    it('обрабатывает SET_VISIBILITY', () => {
        expect(
            reducer([], {type: 'SET_VISIBILITY', visibility: 'TEST'})
        ).to.be.eql('TEST');
    });

});