const {describe, it} = global;

import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';
import { jsdom } from 'jsdom';

import AddTodo from '../AddTodo.jsx';

describe('comonents.AddTodo', () => {

    /*
     addTodo: React.PropTypes.func.isRequired
     */

    it('при сабмите должно срабатывать переданное свойство со значением input-а', () => {

        let testText = 'test_text';

        let addTodo = sinon.spy();
        const el = shallow(<AddTodo addTodo={addTodo}/>);
        const instance = el.instance();

        instance.refs = {
            text: {value: testText}
        };

        el.find('form').simulate('submit', {
            preventDefault(){
            }
        });

        expect(addTodo.calledOnce).to.be.true;
        expect(addTodo.calledWith(testText)).to.be.true;

    });

    it('при сабмите должно срабатывать переданное свойство со значением input-а (тест на реальных DOM)', () => {

        let testText = 'test_text';

        //Создаем реальный DOM для возможности mount
        global.document = jsdom('<!doctype html><html><body></body></html>');
        global.window = document.defaultView;
        global.navigator = global.window.navigator;

        let addTodo = sinon.spy();

        //Используем mount чтоб submit работал как надо
        const el = mount(<AddTodo addTodo={addTodo}/>);

        const instance = el.instance();
        instance.refs = {
            text: {value: testText}
        };

        //Используем реальный DOM поэтому не нужно переопределять свойства события при submit
        el.find('form').simulate('submit');

        expect(addTodo.calledOnce).to.be.true;
        expect(addTodo.calledWith(testText)).to.be.true;

    });

});