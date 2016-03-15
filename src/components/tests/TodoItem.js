const {describe, it} = global;

import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import TodoItem from '../TodoItem.jsx';

describe('comonents.TodoItem', () => {
    let todo = {
        id: 777,
        text: 'test_text',
        completed: false
    };

    it('должен содержать текст todo', () => {

        const el = shallow(<TodoItem onClick={() => {}} onRemove={() => {}} todo={todo}/>);
        expect(el.text()).to.have.string(todo.text);
    });

    it('выполненные todo должны быть зачеркнуты', () => {
        let completedTodo = {...completedTodo, completed: true};
        const completedEl = shallow(<TodoItem onClick={() => {}} onRemove={() => {}} todo={completedTodo}/>);
        expect(completedEl.find('span').at(1).props()).to.have.deep.property('style.textDecoration', 'line-through');

        let notCompletedTodo = {...completedTodo, completed: false};
        const notCompletedEl = shallow(<TodoItem onClick={() => {}} onRemove={() => {}} todo={notCompletedTodo}/>);
        expect(notCompletedEl.find('span').at(1).props()).to.have.deep.property('style.textDecoration', 'none');
    });

    it('при клике на todo должно срабатывать переданное событие onClick', () => {

        let onClick = sinon.spy();
        const el = shallow(<TodoItem onClick={onClick} onRemove={() => {}} todo={todo}/>);

        el.find('span').at(1).simulate('click');

        expect(onClick.calledOnce).to.equal(true);
    });

    it('при клике на удаление todo должно срабатывать переданное событие onRemove', () => {

        let onRemove = sinon.spy();
        const el = shallow(<TodoItem onClick={() => {}} onRemove={onRemove} todo={todo}/>);

        el.find('span').at(0).simulate('click');

        expect(onRemove.calledOnce).to.equal(true);
    });
});