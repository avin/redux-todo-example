const {describe, it} = global;

import {expect} from 'chai';
import reducer from '../todos';

describe('reducers.todos', () => {
    let testText = 'test_text';

    it('возвращает state по умолчанию', () => {
        expect(
            reducer(undefined, {})
        ).to.be.eql([]);
    });

    it('обрабатывает ADD_TODO', () => {
        expect(
            reducer([], {type: 'ADD_TODO', text: testText})
        ).to.be.eql([
            {
                id: 1,
                text: testText,
                completed: false
            }
        ]);
    });

    it('обрабатывает REMOVE_TODO', () => {
        let testState = [
            {
                id: 1,
                text: testText,
                completed: false
            },
            {
                id: 2,
                text: testText,
                completed: false
            }
        ];
        expect(
            reducer(testState, {type: 'REMOVE_TODO', id: 1})
        ).to.be.eql([
            {
                id: 2,
                text: testText,
                completed: false
            }
        ]);
    });

    it('обрабатывает TOGGLE_TODO', () => {
        let testState = [
            {
                id: 1,
                text: testText,
                completed: false
            },
            {
                id: 2,
                text: testText,
                completed: false
            }
        ];
        expect(
            reducer(testState, {type: 'TOGGLE_TODO', id: 1})
        ).to.be.eql([
            {
                id: 1,
                text: testText,
                completed: true
            },
            {
                id: 2,
                text: testText,
                completed: false
            }
        ]);
    });

});