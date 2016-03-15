const {describe, it} = global;

import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import TodoList from '../TodoList.jsx';
import TodoItem from '../TodoItem.jsx';

describe('comonents.TodoList', () => {
    let todos = [
        {id: 1, text: 'text1', completed: false},
        {id: 1, text: 'text2', completed: true}
    ];

    it('должен содержать TodoItem для всех todos', () => {
        let onTodoToggle = () => {};
        let onTodoRemove = () => {};

        const el = shallow(<TodoList todos={todos} onTodoToggle={onTodoToggle} onTodoRemove={onTodoRemove} />);
        expect(el.find(TodoItem)).to.have.length(todos.length);
    });
});